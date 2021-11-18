import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Query, Store, StoreConfig } from '@datorama/akita';

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 42
}

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'counter' })
export class CounterStateService extends Store<CounterState> {
    constructor() {
        super(initialState)
    }

    increment() {
        this.update(state => ({count: state.count + 1}))
    }

    decrement() {
        this.update(state => ({count: state.count - 1}))
    }
}

@Injectable({providedIn: 'root'})
export class CounterQuery extends Query<CounterState> {
    count$: Observable<number> = this.select(state => state.count);

    constructor(store: CounterStateService) {
        super(store);
    }
}
