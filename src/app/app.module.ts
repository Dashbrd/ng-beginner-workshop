import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SwCharacterComponent } from './sw-character/sw-character.component';
import { SwPeopleListComponent } from './sw-people-list/sw-people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwPeopleListComponent,
    SwCharacterComponent,
    CharacterSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
