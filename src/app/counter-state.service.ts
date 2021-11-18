import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 42
}

@Injectable({
    providedIn: 'root'
})
export class CounterStateService extends // TODO {

    $count

:
Observable < number > = this.select(state => state.count);

constructor()
{
    super(initialState)
}

increment()
{
    this.setState({count: this.state.count + 1})
}

decrement()
{
    this.setState({count: this.state.count - 1})
}
}
