import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
/**
 * Generated class for the InstanceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instance-list',
  templateUrl: 'instance-list.html',
})
export class InstanceListPage {
	instances: any;
	currentInstance: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, items: Items) {
  	this.currentInstance = navParams.get('item') || items.defaultItem;
  	console.log("Instances of from list: ", this.currentInstance);
  	this.instances = this.currentInstance.instances;
  	console.log("Instances list: ", this.instances);
  }

  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InstanceListPage');
  }

}
