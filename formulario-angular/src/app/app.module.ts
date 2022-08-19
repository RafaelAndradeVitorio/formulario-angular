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
import { FormEtapa1Component } from './form-formulario/form-etapa1/form-etapa1.component';
import { FormEtapa2Component } from './form-formulario/form-etapa2/form-etapa2.component';
import { FormEtapa3Component } from './form-formulario/form-etapa3/form-etapa3.component';
import { FormBotaoSkipComponent } from './form-formulario/form-botao-skip/form-botao-skip.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormNavComponent,
    FormHomeComponent,
    FormIlustracaoComponent,
    FormFormularioComponent,
    FormEtapa1Component,
    FormEtapa2Component,
    FormEtapa3Component,
    FormBotaoSkipComponent,
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
