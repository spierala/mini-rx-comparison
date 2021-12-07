# MiniRx Comparison

Compare basic setup and bundle size of:
- [MiniRx Feature Store](https://mini-rx.io/docs/fs-quick-start)
- [NgRx Component Store](https://ngrx.io/guide/component-store)
- [Akita](https://datorama.github.io/akita/)

## Bundle Sizes

Check the bundle sizes with source map explorer.

Run source map explorer using `npm run build:stats`

### 1. MiniRx Feature Store
Branch: main

Setup State Service: https://github.com/spierala/mini-rx-comparison/blob/main/src/app/counter-state.service.ts

Bundle size: **[combined] (152.39 KB)**

### 1.1. MiniRx Feature Store + Store API (Store + Effects) using [Angular Integration (mini-rx-store-ng)](https://mini-rx.io/docs/angular#register-effects) 
Branch: mini-rx-store-ng-store-effects

Setup Redux: https://github.com/spierala/mini-rx-comparison/blob/mini-rx-store-ng-store-effects/src/app/app.module.ts

Setup State Service: https://github.com/spierala/mini-rx-comparison/blob/mini-rx-store-ng-store-effects/src/app/counter-state.service.ts

Bundle size: **[combined] (156.9 KB)**

### 2. NgRx Component Store
Branch: ngrx-component-store

Setup State Service: https://github.com/spierala/mini-rx-comparison/blob/ngrx-component-store/src/app/counter-state.service.ts

Bundle size: **[combined] (152.25 KB)**

### 2.1. NgRx Component Store + NgRx Store
Branch: ngrx-component-store-ngrx-store

Setup Redux: https://github.com/spierala/mini-rx-comparison/blob/ngrx-component-store-ngrx-store/src/app/app.module.ts

Setup State Service: https://github.com/spierala/mini-rx-comparison/blob/ngrx-component-store-ngrx-store/src/app/counter-state.service.ts

Bundle size: **[combined] (164.17 KB)**

### 2.2. NgRx Component Store + NgRx Store + NgRx Effects
Branch: ngrx-component-store-ngrx-store-effects

Setup Redux: https://github.com/spierala/mini-rx-comparison/blob/ngrx-component-store-ngrx-store-effects/src/app/app.module.ts

Setup State Service: https://github.com/spierala/mini-rx-comparison/blob/ngrx-component-store-ngrx-store-effects/src/app/counter-state.service.ts

Bundle size: **[combined] (171.45 KB)**

### 3. Akita
Branch: akita

Setup State Service: https://github.com/spierala/mini-rx-comparison/blob/akita/src/app/counter-state.service.ts

Bundle size: **[combined] (151.61 KB)**

### 3.1 Akita 7

Setup: https://github.com/spierala/mini-rx-comparison/blob/akita_7/src/app/counter-state.service.ts

Bundle size: **[combined] (167.19 KB)**
