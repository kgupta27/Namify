import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data.items;
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }

}
