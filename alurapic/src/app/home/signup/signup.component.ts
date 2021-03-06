import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { lowerCaseValidator } from "../../shared/validators/lower-case.validator";
import { PlatformDetectorService } from "../../core/platform-detector/platform-detector.service";
import { NewUser } from "./new-user";
import { SignUpService } from "./signup.service";
import { userNamePassword } from "./username-password.validator";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";

@Component({
  templateUrl: './signup.component.html',
  providers: [
    UserNotTakenValidatorService
  ]
})
export class SignUpComponent implements OnInit{

  signupForm: FormGroup;

  @ViewChild('emailInput') emailInput:ElementRef<HTMLInputElement>;


  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      userName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          lowerCaseValidator
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(18)
        ]
      ]
    }, {
      validator: userNamePassword
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }

  signup(){
    if(this.signupForm.valid && !this.signupForm.pending){
      const newUser: NewUser = this.signupForm.getRawValue() as NewUser;

      this.signupService
          .signup(newUser)
          .subscribe(
            () => this.router.navigate(['']),
            err => console.log(err)
          );
    }
  }
}
