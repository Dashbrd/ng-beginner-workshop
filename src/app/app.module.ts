import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwPeopleListComponent } from './sw-people-list/sw-people-list.component';
import { SwCharacterComponent } from './sw-character/sw-character.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwPeopleListComponent,
    SwCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
