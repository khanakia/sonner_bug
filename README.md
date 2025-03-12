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

- We import the UI Sonner Button here https://github.com/khanakia/sonner_bug/blob/main/src/apps/super/src/app/page.tsx
- this file contains a button with toast https://github.com/khanakia/sonner_bug/blob/main/src/fasto/ui/src/components/SonnerButton.tsx
- when toast is clicked from UI pkg it does not works
