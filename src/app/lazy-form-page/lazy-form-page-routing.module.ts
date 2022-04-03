import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyFormPageComponent } from './lazy-form-page.component';

const routes: Routes = [{ path: '', component: LazyFormPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyFormPageRoutingModule { }
