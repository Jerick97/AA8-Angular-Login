import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users : string = 'Angular';
  passwords : string = '123456';
  nav : string[] = ['Home', 'Support', 'Contact'];
  incorrecto : boolean = false;
  bienvenida : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  login(usuario:string,pass:string){
    if((usuario === this.users) && (pass === this.passwords) ){
      this.bienvenida = true;
      this.incorrecto = false;
    }else{
      this.incorrecto = true;
      this.bienvenida = false;
    }
  }
}
