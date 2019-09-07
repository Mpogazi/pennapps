import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SAMPLE_STOCKS } from '../../mocks/search-box.mock';
import { Overlay } from '@angular/cdk/overlay';


@Component({
    selector: 'search-box-component',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss']
})

export class SearchBoxComponent {
    public searchControl: FormControl;
    public filteredResults$: Observable<string[]>;

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
}
