import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CompanyModel } from '../../models/company.model';

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit, OnDestroy {
    @Input() company;

    constructor() {}

    ngOnInit() {
        console.log('Another Company');
        console.log(this.company);
    }

    ngOnDestroy() {
        console.log("Component destroyed");
    }
}