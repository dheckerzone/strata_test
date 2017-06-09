import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { BuildingService } from "app/building/building.service";
import { HttpModule } from '@angular/http';
import { FinancialsComponent } from './financials/financials.component';

const appRoutes: Routes = [
  { path: 'building', component: BuildingComponent },
  { path: '', component: BuildingComponent },
  { path: 'financials', component: FinancialsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    FinancialsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
