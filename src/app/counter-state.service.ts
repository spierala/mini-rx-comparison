import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 42
}

@Injectable({
    providedIn: 'root'
})
export class CounterStateService extends ComponentStore<CounterState> {

    $count: Observable<number> = this.select(state => state.count);

    constructor() {
        super(initialState)
    }

    increment() {
        this.setState(state => ({count: state.count + 1}))
    }

    decrement() {
        this.setState(state => ({count: state.count - 1}))
    }
}
