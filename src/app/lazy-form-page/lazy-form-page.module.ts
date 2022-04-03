import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyFormPageRoutingModule } from './lazy-form-page-routing.module';
import { LazyFormPageComponent } from './lazy-form-page.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LazyFormPageComponent
  ],
  imports: [
    CommonModule,
    LazyFormPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class LazyFormPageModule { }
