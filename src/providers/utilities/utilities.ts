import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class UtilitiesProvider {

  alert: any;
  alertOptions = {
    title: 'Alert',
    // subTitle: 'Alert is Here',
  }

  loader_count: number = 0;
  loader: any;
  loading = {
    content: 'Please wait...'
  }

  toast: any;
  toastOptions = {
    message: 'User was added successfully',
    duration: 3000,
    position: 'top'
  }

  constructor(
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
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

  showLoader(loading = {}, onDismiss = () => { }) {
    this.loader_count++;
    if (this.loader_count == 1) {
      this.loader = this.loadingCtrl.create(Object.assign({}, this.loading, loading));
      this.loader.present();
    }
  }

  hideLoader() {
    if (this.loader_count == 1)
      this.loader.dismiss()
    this.loader_count--;
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
