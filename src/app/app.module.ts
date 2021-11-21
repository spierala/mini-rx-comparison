import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterShellComponent } from './counter-shell/counter-shell.component';
import { Action, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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

@NgModule({
    declarations: [
        AppComponent,
        CounterShellComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({counter: counterReducer}),
        EffectsModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
