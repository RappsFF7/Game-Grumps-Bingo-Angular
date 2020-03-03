import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { ConfigComponent } from './components/config/config.component';
import { SavedBoardsComponent } from './components/saved-boards/saved-boards.component';
import { ShareComponent } from './components/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameboardComponent,
    ConfigComponent,
    SavedBoardsComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
