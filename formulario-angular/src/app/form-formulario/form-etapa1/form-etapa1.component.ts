import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-etapa1',
  templateUrl: './form-etapa1.component.html',
  styleUrls: ['./form-etapa1.component.scss', '../form-etapas.scss', '../../cores.scss']
})
export class FormEtapa1Component implements OnInit {

  nome: String =""
  email: String=""
  nomeIgreja: String = ""

  send(){

  }

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}


