import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SAMPLE_STOCKS } from '../../mocks/search-box.mock';


@Component({
    selector: 'search-box-component',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss']
})

export class SearchBoxComponent {
    public searchControl: FormControl;
    public filteredResults$: Observable<string[]>;
    @Output()
    searchEvent: EventEmitter<string> = new EventEmitter<string>();

    // An array of strings from the server
    public stocks = SAMPLE_STOCKS;

    constructor() {
        this.searchControl = new FormControl('');
        this.filteredResults$ = this.searchControl.valueChanges
            .pipe(
                startWith(''),
                map(val => this.filterNames(val)),
                map(val => val.slice(0, 5))
            );
    }

    private filterNames(val: string): string[] {
        return val ?
            this.stocks.filter(x => x.toLowerCase().indexOf(val.toLowerCase()) === 0) :
            [];
    }

    private fireSearch(): void {
        const term = this.searchControl.value;
        this.searchControl.setValue('');
        if (!!term) {
            this.searchEvent.emit(term);
        }
    }
}
