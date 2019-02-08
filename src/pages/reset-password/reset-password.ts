import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesProvider } from './../../providers/utilities/utilities';
import { ERROR_MESSAGES } from './../../app/error';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  resetForm: FormGroup;
  password: string;
  showCurrPswd: boolean = false;
  showNewPswd: boolean = false;
  showCnfmPswd: boolean = false;
  error:any;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private utility: UtilitiesProvider) {

    this.error = ERROR_MESSAGES;
    this.resetForm = formBuilder.group({
      curr_password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      new_password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      cnfm_password: ['', Validators.compose([Validators.required])]
    });

    this.password = window.localStorage.getItem('password');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  // function which will validate the form and then reset the password in storage
  onSubmit(value: any): void {
    if (this.resetForm.valid) {
      if (value.new_password == value.cnfm_password) {
        if (window.localStorage.getItem('password') == value.curr_password) {
          window.localStorage.setItem('password', value.new_password);
          this.nav.push('HomeScreenPage');
          this.utility.showToast({ message: 'You have successfully changed the password!' });
        }
        else {
          this.utility.showAlert({
            message: 'Wrong Password!', buttons: [
              {
                text: 'Ok',
                handler: () => {
                 }
              }]
          })
        }

      }
      else{
        console.log("The New Password and Confirm New Password didn't matched.")
         this.utility.showToast({message: 'The New Password and Confirm New Password didn\'t matched.'});
      }
    }
  }
}
