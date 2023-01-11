import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-botao-skip',
  templateUrl: './form-botao-skip.component.html',
  styleUrls: ['./form-botao-skip.component.scss', "../../form-formulario/form-etapas.scss"]
})
export class FormBotaoSkipComponent implements OnInit {
  id: any;

  constructor(private route: Router,  private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    console.log()
  }


  skip2() : void{
    this.route.navigate([`etp2`])
    console.log("tururu")
}

}
