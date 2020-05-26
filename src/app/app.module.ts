import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListFilterComponent } from './game-list-filter/game-list-filter.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';


// routing
import { RouterModule } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameFormComponent } from './game-form/game-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameListFilterComponent,
    ActionButtonComponent,
    NotFoundComponent,
    GameDetailsComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
