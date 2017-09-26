import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController} from 'ionic-angular';

import { Items } from '../../providers/providers';
declare var cordova:any;
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'hwscloud.html'
})
export class HWSPage {

  isReadonly: boolean;
  currentItems: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public items: Items, 
    public platform: Platform, 
    public toastCtrl: ToastController) { 
    this.platform = platform;
    this.isReadonly = true;
  }

  //Launch Website
  /*launch(url) {
        this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_self", "location=true");
        });
    }*/
  showToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
      showCloseButton: true
    });
    toast.present();
  }
  edit(input){
    this.isReadonly = !this.isReadonly; 
    input.setFocus(); 
  }
  save(){
    this.isReadonly = !this.isReadonly;
    this.showToast("User account info saved successfully!");
  }
}
