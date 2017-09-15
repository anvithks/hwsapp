import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

import { Items } from '../../providers/providers';
declare var cordova:any;
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'hwscloud.html'
})
export class HWSPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public platform: Platform) { 
    this.platform = platform;
  }

  //Launch Website
  launch(url) {
        this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_self", "location=true");
        });
    }

}
