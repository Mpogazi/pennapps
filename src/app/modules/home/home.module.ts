import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material';
import { ContentComponent } from './components/content/content.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BoldPipe } from './pipes/bold.pipe';

const components = [
    HomeComponent,
    CardComponent,
    ContentComponent,
    SearchBoxComponent,
    HeaderComponent,
];


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
    ],
    declarations: [...components, BoldPipe],
    bootstrap: [ HomeComponent ]
})

export class HomeModule {}