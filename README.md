# Sonner not working

## how to test

Run App

```
cd src/apps/super
pnpm install
pnpm dev
```

Watch UI library in dev mode

```
cd fasto/ui
pnpm install
pnpm dev
```

- We import the UI Sonner Button here `src/apps/super/src/app/page.tsx`
- `src/fasto/ui/src/components/SonnerButton.tsx` this file contains a button with toast
- when toast is clicked from UI pkg it does not works
