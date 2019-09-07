import { Component } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    public exists: boolean;
    public title = "PENNAPPS STOCKS";
}