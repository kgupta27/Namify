import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Injectable()
export class UtilitiesProvider {

  alert: any;
  alertOptions = {
    title: 'Alert',
  }

  toast: any;
  toastOptions = {
    message: 'User added successfully',
    duration: 3000,
    position: 'top'
  }

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  ) {
    console.log('Hello UtilitiesProvider Provider');
  }

  showAlert(alertOptions, onDismiss = () => { }) {
    this.alert = this.alertCtrl.create(Object.assign({}, this.alertOptions, alertOptions));
    this.alert.present();
    this.alert.onDidDismiss(() => onDismiss());
  }

  hideAlert() {
    this.alert.Dismiss();
  }

  showToast(toastOptions = {}, onDismiss = () => { }) {
    if (this.toast && (this.toast._state != 4))
      this.toast.dismiss();
    this.toast = this.toastCtrl.create(Object.assign({}, this.toastOptions, toastOptions));
    console.log(this.toast);

    this.toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    this.toast.present();
  }

  hideToast() {
    if (this.toast && (this.toast._state != 4))
      this.toast.dismiss();
  }
}
