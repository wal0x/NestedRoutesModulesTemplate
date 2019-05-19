import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumansComponent } from './humans.component';
import { MalesComponent } from './males/males.component';
import { FemalesComponent } from './females/females.component';
import { RouterModule } from '@angular/router';
import { HumansRoutingModule } from './humans-routing.module';

@NgModule({
  declarations: [HumansComponent, MalesComponent, FemalesComponent],
  imports: [
    CommonModule,
    RouterModule,
    HumansRoutingModule
  ]
})
export class HumansModule { }
