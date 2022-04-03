import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'form/edit', loadChildren: () => import('./lazy-form-page/lazy-form-page.module').then(m => m.LazyFormPageModule) },
  { path: 'form', loadChildren: () => import('./lazy-form-page/lazy-form-page.module').then(m => m.LazyFormPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
