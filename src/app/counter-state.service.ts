import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createState, withProps, select } from '@ngneat/elf';

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 42
}

const { state, config } = createState(withProps<CounterState>(initialState));
const counterStore = new Store({ state, name: 'counter', config });

@Injectable({
    providedIn: 'root'
})
export class CounterStateService {

    count$: Observable<number> = counterStore.pipe(select(state => state.count));

    constructor() {}

    increment() {
        counterStore.update(state => ({count: state.count + 1}))
    }

    decrement() {
        counterStore.update(state => ({count: state.count - 1}))
    }
}
