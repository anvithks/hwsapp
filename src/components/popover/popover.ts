import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {ViewController, LoadingController, ToastController, NavController, NavParams} from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { SocialSharing } from '@ionic-native/social-sharing';
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
  private removeCard: any;
  private data: any;
  screen: any;
  state: boolean = false;
  constructor(private viewCtrl: ViewController, 
  	public translateService: TranslateService, 
  	public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private screenshot: Screenshot,
    private socialSharing: SocialSharing) {
  	this.showStatusCard = true;
  	this.showBillingCard = true;
    this.cardType = this.navParams.get('cardType');
    this.removeCard = this.navParams.get('removeCard');
    console.log('Hello PopoverComponent Component', this.cardType, this.removeCard);
    this.translateService.get('COMMON_ERROR').subscribe((value) => {
      this.removeCardError = value;
    })
    this.translateService.get('REMOVE_CARD_SUCCESS').subscribe((value) => {
      this.removeCardSuccess = value;
    })
  }
  // Reset function we will use to hide the screenshot preview after 1 second
  reset() {
    var self = this;
    setTimeout(function(){ 
      self.state = false;
    }, 1000);
  }

  screenShot() {
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
    });
  }
  screenShotURI() {
    let msg = "Sharing chart via HWSApp";
    this.screenshot.URI(80).then(res => {
      this.screen = res.URI;
      this.state = true;
      // Check if sharing via card is supported
      this.close(this.cardType, this.removeCard);
      this.socialSharing.share(msg,null,this.screen,null).then(() => {
        // Sharing via email is possible
        this.showToast("Shared successfully!");
      }).catch(() => {
        // Sharing via email is not possible
        this.showToast("Could not share!");
      });
      this.reset();
    });
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
    this.screenShotURI();    
  }

  edit(card: any){
    console.log("Edited the card");
    let msg = "Edited The chart";
    this.showToast(msg);
    this.close(this.cardType, this.removeCard);
  }

  removeCardFn(card: any){
    this.removeCard = true;
      switch (this.cardType) {
        case "status":
          this.showStatusCard = false;
          this.close(this.cardType, this.removeCard);
          break;
        case "billing":
          this.showBillingCard = false;
          this.close(this.cardType, this.removeCard);
          break;
        default:
          this.close(this.cardType, this.removeCard);
          break;
      }
  }

  viewLogs(card: any){
    console.log("View Logs");
    let msg = "View Logs";
    this.showToast(msg);
    this.close(this.cardType, this.removeCard);
  }

  close(data: any, removeCard: any) {
    this.viewCtrl.dismiss(data, removeCard);
  }

}
