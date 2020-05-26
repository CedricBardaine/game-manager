import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListFilterComponent } from './game-list-filter/game-list-filter.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'product', component: GameListComponent },
  { path: 'NotFoundComponent', component: NotFoundComponent },
  
  { path: '',   redirectTo: '/product', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameListFilterComponent,
    ActionButtonComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} 
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
