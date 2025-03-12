import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react-swc'
import { glob } from 'glob'
import { extname, relative, resolve } from 'path'
// vite.config.js
import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig, type Plugin } from 'vite'
import dts from 'vite-plugin-dts'

import { dependencies } from './package.json'

export default defineConfig({
  plugins: [
    react(),
    dts({ tsconfigPath: './tsconfig.app.json' }),
    preserveDirectives() as Plugin,
  ],

  build: {
    minify: false,
    emptyOutDir: false,
    // This switches Vite ot the Vite Library mode

    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      // name: 'FastoNextjs',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...Object.keys(dependencies), ...['react/jsx-runtime']],

      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     react: 'React',
      //   },
      //   // globals: external.reduce(
      //   //   (agg, entry) => ({ ...agg, [entry]: entry }),
      //   //   {}
      //   // ),
      // },

      input: Object.fromEntries(
        glob
          .sync(['src/**/*.{ts,tsx}'], {
            ignore: ['src/**/*.d.ts', 'src/**/*.d'],
          })
          .map((file: string) => {
            console.log(file)
            return [
              // The name of the entry point
              // lib/nested/foo.ts becomes nested/foo
              relative(
                'src',
                file.slice(0, file.length - extname(file).length),
              ),
              // The absolute path to the entry file
              // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
              fileURLToPath(new URL(file, import.meta.url)),
            ]
          }),
      ),
      output: {
        // This is path for CSS assets
        assetFileNames: 'assets/css/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
})
