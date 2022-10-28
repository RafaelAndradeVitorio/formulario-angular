import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-formulario',
  templateUrl: './form-formulario.component.html',
  styleUrls: ['./form-formulario.component.scss','../cores.scss','../form-formulario/form-etapas.scss']
})
export class FormFormularioComponent implements OnInit {

  etapa: number = 1 ;

  onSubmit(form: any){
     console.log(form)
     console.log('subMETEU')
  }

  avancar(step: number ){
     this.etapa = step
     console.log('jesus')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
