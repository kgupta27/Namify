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

  // logout function will remove the local storage and the session will expire for a particular user
  logout(){
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');

    this.nav.setRoot('LoginScreenPage');
    this.nav.popToRoot();
  }

  // function to navigate to reset password page
  resetPassword(){
    console.log("Reset Password")
    this.nav.push('ResetPasswordPage');
  }

  // function to navigate to searching page
  clientSearch(){
    this.nav.push('ClientSearchPage');
  }
}
