import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the AddCardModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-card-modal',
  templateUrl: 'add-card-modal.html',
})
export class AddCardModalPage {

	private addCardSuccess: string;
	private cardItems: any;
	public monitoringMetric: any;
	public monitoringMetricSource: any;

	constructor(public navCtrl: NavController, 
		public navParams: NavParams, 
		public viewCtrl: ViewController, 
		public toastCtrl: ToastController,
		public translateService: TranslateService,
		public storage: Storage) {
		console.log("Add Cards get:", this.navParams.get('cardItems'));
		this.translateService.get('ADD_CARD_SUCCESS').subscribe((value) => {
      		this.addCardSuccess = value;
    	});
    	this.cardItems = this.navParams.get('cardItems');
    	/*this.storage.get('cardList').then((data) => {
	      this.cardItems = JSON.parse(data);
	      console.log("From add Cards",data);	      
	    });*/
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddCardModalPage');
	}
	addCard(){
		let item = {
		    "cardIcon": "filing",
		    "cardName": this.monitoringMetric + " of " + this.monitoringMetricSource,
		    "chartId":"diskContainer",
		    "date": this.monitoringMetric,
		    "content": ""
		  };
		this.cardItems.push(item);
		console.log("Added New Card",this.cardItems);
		//this.storage.set('cardList', JSON.stringify(this.cardItems));
		let toast = this.toastCtrl.create({
        	message: this.addCardSuccess,
        	duration: 3000,
        	position: 'top'
	    });
		toast.present();
		this.closeModal(this.cardItems);
	}
	closeModal(data) {
		this.viewCtrl.dismiss(data);
	}

}
