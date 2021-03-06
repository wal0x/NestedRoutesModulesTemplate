import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HumansComponent } from './humans.component';
import { MalesComponent } from './males/males.component';
import { FemalesComponent } from './females/females.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'humans',
          component: HumansComponent,
          children: [
              { path: 'males', component: MalesComponent },
              { path: 'females', component: FemalesComponent },
              { path: '', redirectTo: 'males', pathMatch: 'full' }
          ]
      }
  ])
  ]
})
export class HumansRoutingModule { }
