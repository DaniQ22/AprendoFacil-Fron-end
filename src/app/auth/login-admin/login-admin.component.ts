import { Component } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  //Varible para definir el typo de input (Contraseña)
  typeText: string = "password";


  //Metodo para ver la constraseña
  showPasword(event: any){
    this.typeText = event.target.checked ? "text" : "password";
  }
}
