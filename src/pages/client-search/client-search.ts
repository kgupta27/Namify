import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { DataProvider } from './../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-client-search',
  templateUrl: 'client-search.html',
})
export class ClientSearchPage {

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;
  noRecordsFound: boolean = false;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

      this.searching = false;
      this.setFilteredItems();

    });


  }

  // function will help in improving UX by showing a loading spiner while searching
  onSearchInput() {
    this.searching = true;
  }

  // function to filter the data items as per user input
  setFilteredItems() {

    this.items = this.dataService.filterItems(this.searchTerm);
    if (this.items.length == 0) {
      this.noRecordsFound = true;
    }
    else{
      this.noRecordsFound = false;
    }

  }

  // function to navigate on search result page
  searchResults(items){
    console.log(items);
    this.navCtrl.push('SearchResultsPage',{items});
  }
}
