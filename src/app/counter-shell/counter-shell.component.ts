import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterQuery, CounterStateService } from '../counter-state.service';

@Component({
    selector: 'app-counter-shell',
    templateUrl: './counter-shell.component.html',
    styleUrls: ['./counter-shell.component.css'],
    host: {'class': 'd-flex w-100 h-100'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterShellComponent {

    count$: Observable<number> = this.counterQuery.count$;

    constructor(
        private counterState: CounterStateService,
        private counterQuery: CounterQuery
    ) {
    }

    increment() {
        this.counterState.increment();
    }

    decrement() {
        this.counterState.decrement();
    }
}
