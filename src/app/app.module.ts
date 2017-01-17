import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NotesComponent } from './notes/notes.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NoteCardComponent } from './note-card/note-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NotesComponent,
    TopBarComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
