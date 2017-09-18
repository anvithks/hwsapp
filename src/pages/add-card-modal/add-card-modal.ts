import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

	constructor(public navCtrl: NavController, 
		public navParams: NavParams, 
		public viewCtrl: ViewController, 
		public toastCtrl: ToastController,
		public translateService: TranslateService) {
		this.translateService.get('ADD_CARD_SUCCESS').subscribe((value) => {
      		this.addCardSuccess = value;
    	})	
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddCardModalPage');
	}
	addCard(){
		let toast = this.toastCtrl.create({
        	message: this.addCardSuccess,
        	duration: 3000,
        	position: 'top'
	    });
		toast.present();
		this.closeModal();
	}
	closeModal() {
		this.viewCtrl.dismiss();
	}

}
