import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {ViewController, LoadingController, ToastController, NavController, NavParams} from 'ionic-angular';
/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
	removeCardError: any;
	removeCardSuccess: any;
	showStatusCard: boolean;
  showBillingCard: boolean;
  private cardType: any;
  private data: any;
  constructor(private viewCtrl: ViewController, 
  	public translateService: TranslateService, 
  	public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,) {
  	this.showStatusCard = true;
  	this.showBillingCard = true;
    this.cardType = this.navParams.get('cardType');
    console.log('Hello PopoverComponent Component', this.cardType);
    this.translateService.get('COMMON_ERROR').subscribe((value) => {
      this.removeCardError = value;
    })
    this.translateService.get('REMOVE_CARD_SUCCESS').subscribe((value) => {
      this.removeCardSuccess = value;
    })
  }
  showToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  share(chart: any){
    console.log("Shared The chart");
    let msg = "Shared The chart";
    this.showToast(msg);
    this.close(this.cardType);
  }

  edit(card: any){
    console.log("Edited the card");
    let msg = "Edited The chart";
    this.showToast(msg);
    this.close(this.cardType);
  }

  removeCard(card: any){
      switch (this.cardType) {
        case "status":
          this.showStatusCard = false;
          this.close(this.cardType);
          break;
        case "billing":
          this.showBillingCard = false;
          this.close(this.cardType);
          break;
        default:
          this.close(this.cardType);
          break;
      }
      let toast = this.toastCtrl.create({
        message: this.removeCardSuccess,
        duration: 2000,
        position: 'top'
      });
      toast.present();
  }

  viewLogs(card: any){
    console.log("View Logs");
    let msg = "View Logs";
    this.showToast(msg);
    this.close(this.cardType);
  }

  close(data: any) {
    this.viewCtrl.dismiss(data);
  }

}
