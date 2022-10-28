import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormNavComponent } from './form-nav/form-nav.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { FormIlustracaoComponent } from './form-ilustracao/form-ilustracao.component';
import { FormFormularioComponent } from './form-formulario/form-formulario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormNavComponent,
    FormHomeComponent,
    FormIlustracaoComponent,
    FormFormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
