import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormEtapa1Component } from './form-etapa1/form-etapa1.component';

@Component({
  selector: 'app-form-formulario',
  templateUrl: './form-formulario.component.html',
  styleUrls: ['./form-formulario.component.scss','../cores.scss']
})
export class FormFormularioComponent implements OnInit {

  nome: String = ""
  onSubmit(form: any){
     console.log(form)
     console.log('subMETEU')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
