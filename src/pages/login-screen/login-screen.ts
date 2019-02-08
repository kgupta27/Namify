import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesProvider } from './../../providers/utilities/utilities';

@IonicPage()
@Component({
  selector: 'page-login-screen',
  templateUrl: 'login-screen.html',
})
export class LoginScreenPage {

  loginForm: FormGroup;
  passwordType: string = 'password';
  passwordIcon: string = 'eye';

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private utility: UtilitiesProvider) {

    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginScreenPage');
  }

  // Function to hide and unhide password
  hideShowPassword() {
    console.log("hideShowPassword");

    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  onSubmit(value: any): void {
    if (this.loginForm.valid) {
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);

      this.nav.push('HomeScreenPage');
      this.utility.showToast({ message: 'You have successfully logged In!' });
    }
  }
}
