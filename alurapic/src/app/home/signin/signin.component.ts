import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../core/auth.service";

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

  loginForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router
  ){ }

  ngOnInit():void{
     this.loginForm = this.formBuilder.group({
       userName: [ '', Validators.required ],
       password: [ '', Validators.required ]
     });
  }

  login(){
    console.log("vai se autenticar")
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService
        .authenticate(userName, password)
        .subscribe(() => this.router.navigate(['user', userName]),
          err => {
            console.log(err);
            alert('Invalid username or password')
            this.loginForm.reset();
          }
        );
  }
}
