import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';
import { pathToFileURL } from 'url';


const routes: Routes = [
 {path: 'about', component: HeroesComponent},
 {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
