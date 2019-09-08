import { Component, Input } from '@angular/core';
import { sample_companies } from '../../mocks/company.mock';
import { CompanyModel } from '../../models/company.model';

@Component({
    selector: 'content-component',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})

export class ContentComponent {
    @Input() searchTerm: string;
    public companies: CompanyModel[];

    constructor() { }

    ngOnInit() {
        this.companies = sample_companies;
        console.log(this.companies);
    }
}