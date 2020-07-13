import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  // patternValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } => {
  //     if (!control.value) {
  //       return null;
  //     }
  //     // const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
  //     const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])');
  //     const valid = regex.test(control.value);
  //     return valid ? null : { invalidPasswommrd: true };
  //   };
  // }


  validatePassword(firstName: string, lastName: string, password: string) {


    return (formGroup: FormGroup) => {

      const firstNameControl = formGroup.controls[firstName];
      const lastNameControl = formGroup.controls[lastName];
      const passwordControl = formGroup.controls[password];


      if (!firstNameControl.value || !lastNameControl.value || !passwordControl.value) {
        console.log('one of yor fields emtyo');
        return null;
      }

      if (passwordControl.errors && !passwordControl.errors.passwordContainsNames) {
        return null;
      }

      if (passwordControl.value.toUpperCase().includes(firstNameControl.value.toUpperCase())
            ||passwordControl.value.toUpperCase().includes(lastNameControl.value.toUpperCase())) {

        //
        // console.log('from validator', passwordControl.value.includes(firstNameControl.value));
        // console.log('inital error array', passwordControl.errors);
        //
        // const newError = { ...passwordControl.errors, passwordContainsNames: true };

        // console.log('new err', newError);
        passwordControl.setErrors({ passwordContainsNames: true });
        // passwordControl.setErrors(newError);


      }
      //
      // else if (passwordControl.value.includes(lastNameControl.value)) {
      //   console.log('from validator', passwordControl.value.includes(firstNameControl.value));
      //
      //
      //   passwordControl.setErrors({ ...passwordControl.errors }, { passwordContainsLastName: true });
      // }

      else {
        passwordControl.setErrors(null);
      }
    }
  }


}
