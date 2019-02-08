import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home-screen',
  templateUrl: 'home-screen.html',
})
export class HomeScreenPage {

  username: string;

  constructor(public nav: NavController) {
    this.nav = nav;
    this.username = window.localStorage.getItem('username');
  }

  logout(): void {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');

    this.nav.setRoot('LoginScreenPage');
    this.nav.popToRoot();
  }

  resetPassword(){
    console.log("Reset Password")
    this.nav.push('ResetPasswordPage');
  }

  clientSearch(){
    this.nav.push('ClientSearchPage');
  }
}
