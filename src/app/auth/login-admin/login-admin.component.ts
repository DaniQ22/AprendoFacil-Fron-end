import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/core/Models/model-login';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private loginService: AuthServiceService,
    private route: Router
  ) {

  }

  //Varible para definir el typo de input (Contraseña)
  typeText: string = "password";



  formLogin!: FormGroup;

  //Modelo de datos de nuesto obejto login
  dataLogin!: loginModel;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  //Metodo para ver la constraseña
  showPasword(event: any) {
    this.typeText = event.target.checked ? "text" : "password";
  }


  //Metodo para hacer el login
  login() {
    if (!this.formLogin.valid) {
      alert('Please, fill out all fields');
      return;
    }

    this.dataLogin = this.formLogin.value;
    this.loginService.login(this.dataLogin).subscribe(
      response => {
        alert("Inicio de sesión exitoso");
        this.route.navigateByUrl('/dashboard')
      },
      (error) => {
        alert(error.message); // Mostrar el mensaje de error en un alert
      }
    );
  }

}
