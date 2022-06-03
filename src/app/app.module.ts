import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProgrammeComponent } from './programme/programme.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    AccueilComponent,
    ProgrammeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
