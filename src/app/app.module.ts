import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { formulComponent } from './formul/formul.component';
import { FormsModule } from '@angular/forms';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

@NgModule({
  declarations: [
   
    formulComponent,
    AppComponent,
    EnseignantComponent,
    EtudiantComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
