import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Router, Routes, provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { GemListComponent } from './app/gem-list/gem-list.component';
import { GemListItemComponent } from './app/gem-list-item/gem-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ModifyGemComponent } from './app/modify-gem/modify-gem.component';

const routes: Routes = [
  {path: '', redirectTo:'/gems', pathMatch:'full'},
  {path: 'gems', component: GemListComponent},
  {path: 'gems/:id', component: GemListItemComponent},
  {path: 'modify-gem', component: ModifyGemComponent},
  {path: '**', component: PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
