import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../core/auth/auth.service";
import { PlatformDetectorService } from "../../core/platform-detector/platform-detector.service";


@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

  loginForm:FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private platformDetectorService: PlatformDetectorService
  ){ }

  ngOnInit():void{
     this.loginForm = this.formBuilder.group({
       userName: [ '', Validators.required ],
       password: [ '', Validators.required ]
     });
     this.platformDetectorService.isPlatformBrowser() &&
       this.userNameInput.nativeElement.focus();
  }

  login():void{
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService
        .authenticate(userName, password)
        .subscribe(
          () => this.router.navigate(['user', userName]),
          err => {
            console.log(err);
            alert('Invalid username or password');
            this.platformDetectorService.isPlatformBrowser() &&
              this.userNameInput.nativeElement.focus();
            this.loginForm.reset();
          }
        );
  }
}
