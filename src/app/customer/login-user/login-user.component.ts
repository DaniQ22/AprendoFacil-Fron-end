import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/core/Models/model-login';
import { User } from 'src/app/core/Models/user-model';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private authService: AuthServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  loading: boolean = false;

  formLoginUser!: FormGroup;
  dataLogin: loginModel = {} as loginModel;

  ngOnInit(): void {
    this.formLoginUser = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }


  login(){
    if(!this.formLoginUser.valid){
      alert("Please fill out all fields");
      return;
    }
    this.loading = true;
    this.dataLogin = this.formLoginUser.value;
    this.authService.login(this.dataLogin).subscribe(
      (response)=> {
        alert("Login succesfully");
        this.formLoginUser.reset();
        this.loading = false;
        this.router.navigate(['/current-customer/my-courses']);
      },(error)=> {
        alert("Error, " + error);
      }
    )


  }

}
