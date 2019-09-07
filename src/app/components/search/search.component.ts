import { Component } from '@angular/core';

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class searchComponent {
    public placeHolder = 'search for securities';
    public clear: boolean;

}