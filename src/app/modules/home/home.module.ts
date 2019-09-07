import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ContentComponent } from './components/content/content.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home.component';

const components = [
    HomeComponent,
    ContentComponent,
    SearchBoxComponent,
    HeaderComponent
    ];


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [...components],
    bootstrap: [ HomeComponent ]
})

export class HomeModule {}