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

  classifica(){

    for ( var i=0; i<120; i++){
      let errosLiqui = ((120 - i) * 2);
      console.log(`Acertou ${i}, fez ${ errosLiqui - 120} pontos liquidos`)
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.classifica()
  }

}
