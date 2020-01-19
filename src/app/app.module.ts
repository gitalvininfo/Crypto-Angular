import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoinDataService } from './services/coin-data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    ListCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MultiselectDropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoinDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
