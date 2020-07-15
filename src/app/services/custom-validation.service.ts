import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  // check to see password does not contain first name or last name
  validatePassword(firstName: string, lastName: string, password: string) {

    return (formGroup: FormGroup) => {

      const firstNameControl = formGroup.controls[firstName];
      const lastNameControl = formGroup.controls[lastName];
      const passwordControl = formGroup.controls[password];

      if (!firstNameControl.value || !lastNameControl.value || !passwordControl.value) {
        return null;
      }

      if (passwordControl.errors && !passwordControl.errors.passwordContainsNames) {
        return null;
      }

      const upperCasePassword = passwordControl.value.toUpperCase();
      const upperCaseFirstName = firstNameControl.value.toUpperCase();
      const upperCaseLastName = lastNameControl.value.toUpperCase();

      if (upperCasePassword.includes(upperCaseFirstName) || upperCasePassword.includes(upperCaseLastName)) {
        passwordControl.setErrors({ passwordContainsNames: true });
      } else {
        passwordControl.setErrors(null);
      }

    }
  }


}
