import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { reducers } from './Store/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { TodosEffect } from './Store/effects/todos.effect';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //we can add more one reducers
    StoreModule.forRoot(reducers),
    //we can Add Effects
    EffectsModule.forRoot([TodosEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
