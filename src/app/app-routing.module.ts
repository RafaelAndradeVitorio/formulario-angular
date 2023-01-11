import { FormEtapa1Component } from './form-formulario/form-etapa1/form-etapa1.component';
import { FormEtapa2Component } from './form-formulario/form-etapa2/form-etapa2.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { FormNavComponent } from './form-nav/form-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEtapa3Component } from './form-formulario/form-etapa3/form-etapa3.component';

const routes: Routes = [
  {
    path: '',
    component: FormEtapa1Component
  },
  {
    path: 'etp2',
    component: FormEtapa2Component
  },
  {
    path: 'etp3',
    component: FormEtapa3Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
