import { ValidatorFn } from "@angular/forms";

export const userNamePassword: ValidatorFn = (formGroup) => {
  const userName = formGroup.get('userName').value;
  const password = formGroup.get('password').value;

  if(userName.trim() + password.trim()){
    return userName != password
    ? null
    : {userNamePassword: true};
  }
  return null;
};
