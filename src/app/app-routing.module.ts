import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AliensComponent } from './aliens/aliens.component';
import { HumansComponent } from './humans/humans.component';

const routes: Routes = [
  { path: '', component: AliensComponent },
  { path: 'aliens', component: AliensComponent },
  { path: 'humans', component: HumansComponent },
  { path: '**', redirectTo: 'aliens' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
