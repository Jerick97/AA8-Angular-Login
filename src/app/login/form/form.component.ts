import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user : string = 'Angular';
  password : string = '123456';
  nav : string[] = ['Home', 'Support', 'Contact'];
  mostrar : boolean = true;
  bienvenida : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  login(usuario:string,pass:string){
    if((usuario === this.user) && (pass === this.password) ){
      this.bienvenida = true;
    }else{
      this.mostrar = false;
    }
  }
}
