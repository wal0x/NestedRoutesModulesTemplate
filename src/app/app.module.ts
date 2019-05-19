import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HumansModule } from './humans/humans.module';
import { AliensModule } from './aliens/aliens.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HumansModule,
    AliensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
