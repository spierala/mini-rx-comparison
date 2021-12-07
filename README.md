# MiniRx Comparison

Compare basic setup and bundle size of:
- [MiniRx Feature Store](https://mini-rx.io/docs/fs-quick-start)
- [NgRx Component Store](https://ngrx.io/guide/component-store)
- [Akita](https://datorama.github.io/akita/)

##Bundle Sizes

Check the bundle sizes with source map explorer.

Run source map explorer using `npm run build:stats`

### MiniRx Feature Store
Branch: main

Setup: https://github.com/spierala/mini-rx-comparison/blob/main/src/app/counter-state.service.ts

Bundle size: **[combined] (152.39 KB)**

### NgRx Component Store
Branch: ngrx-component-store

Setup: https://github.com/spierala/mini-rx-comparison/blob/ngrx-component-store/src/app/counter-state.service.ts

Bundle size: **[combined] (152.25 KB)**

### Akita
Branch: akita

Setup: https://github.com/spierala/mini-rx-comparison/blob/akita/src/app/counter-state.service.ts

Bundle size: **[combined] (151.61 KB)**

### Akita 7

Setup: https://github.com/spierala/mini-rx-comparison/blob/akita_7/src/app/counter-state.service.ts

Bundle size: **[combined] (167.19 KB)**
