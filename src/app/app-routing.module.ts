import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameFormComponent } from './game-form/game-form.component';

const routes: Routes = [
  { path: 'product', component: GameListComponent },
  
  { path: 'product/new', component: GameFormComponent },
  { path: 'product/:productId/edit', component: GameFormComponent },

  { path: 'product/:id', component: GameDetailsComponent },


  { path: '', redirectTo: '/product', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {})
  ]
})
export class AppRoutingModule { }
