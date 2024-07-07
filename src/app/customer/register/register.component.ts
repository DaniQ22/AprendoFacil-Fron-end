import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/Models/user-model';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(private authService: AuthServiceService,
    private formBuilder: FormBuilder
  ) { }



  formStuden!: FormGroup;

  studenData: User = {} as User;

  ngOnInit(): void {
    this.formStuden = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      phone: ["", Validators.required]
    });
  }

  register() {
    if (!this.formStuden.valid) {
      alert("Please fill out all fields");
      return;
    }

    this.studenData = this.formStuden.value;
    this.authService.registerStudent(this.studenData).subscribe(
      (response) => {
        alert("Register successfully");
        this.formStuden.reset();
      }, (error) => {
        alert("Error:" + error);
      });
  }

}
