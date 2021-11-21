import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterShellComponent } from './counter-shell/counter-shell.component';
import { EffectsModule, StoreModule } from 'mini-rx-store-ng';
import { Action } from 'mini-rx-store';

interface CounterState {
    count: number;
}

const counterInitialState: CounterState = {
    count: 1
};

function counterReducer(
    state: CounterState = counterInitialState,
    action: Action
): CounterState {
    switch (action.type) {
        case 'inc':
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
}

export class TodoEffects {}

@NgModule({
    declarations: [
        AppComponent,
        CounterShellComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({reducers: {counter: counterReducer}}),
        EffectsModule.register([TodoEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
