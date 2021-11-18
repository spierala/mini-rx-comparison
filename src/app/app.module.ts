import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterShellComponent } from './counter-shell/counter-shell.component';

@NgModule({
    declarations: [
        AppComponent,
        CounterShellComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
