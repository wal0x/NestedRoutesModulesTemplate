import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumansComponent } from './humans.component';
import { MalesComponent } from './males/males.component';
import { FemalesComponent } from './females/females.component';

@NgModule({
  declarations: [HumansComponent, MalesComponent, FemalesComponent],
  imports: [
    CommonModule
  ]
})
export class HumansModule { }
