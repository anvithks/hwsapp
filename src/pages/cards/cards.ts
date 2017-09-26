import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController, ToastController, PopoverController, Events } from 'ionic-angular';
import * as HighCharts from 'highcharts';
import { TranslateService } from '@ngx-translate/core';
import { AddCardModalPage } from '../add-card-modal/add-card-modal';
import { CardsProvider } from '../../providers/providers';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { PopoverComponent } from '../../components/popover/popover';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];
  myCpuChart: any;
  myNwChart: any;
  myDiskChart: any;
  
  showCpuCard: boolean;
  showNwCard: boolean;
  showDiskCard: boolean;

  removeCardError: any;
  removeCardSuccess: any;
  showStatusCard: boolean;
  showBillingCard: boolean;
  removeCard: boolean;
  btnVisible:boolean;

  

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController, 
    public translateService: TranslateService, 
    public cards: CardsProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public storage: Storage,
    public popoverCtrl: PopoverController) {
    this.showCpuCard = true;
    this.showNwCard = true;
    this.showDiskCard = true;
    this.removeCard = false;
    this.cards.getCards()
    .subscribe(
      (response)=> {
        this.cardItems = response;
        console.log(this.cardItems);
      },
      (error)=>{
        console.log(error);
      });
    this.showStatusCard = true;
    this.showBillingCard = true;
    
    this.translateService.get('COMMON_ERROR').subscribe((value) => {
      this.removeCardError = value;
    })
    this.translateService.get('REMOVE_CARD_SUCCESS').subscribe((value) => {
      this.removeCardSuccess = value;
    })
    
    this.doRefresh(0);
    this.btnVisible = false;
  }

  //Popover Menu
  presentPopover(cardType: any, ev) {
    let popover = this.popoverCtrl.create(PopoverComponent, {cardType: cardType, removeCard: this.removeCard});
    popover.onDidDismiss((data, popCard) => {
      console.log("popover data:", data);
      if(popCard){
        switch (data) {
          case "status":
            this.showStatusCard = false;         
            break;
          case "billing":
            this.showBillingCard = false;
            break;
          
          default:
          console.log("where to splice", data);
            (this.cardItems).splice(data, 1);
          console.log("After splicing",this.cardItems);
          this.showToast(this.removeCardSuccess);
            break;
        }
      }      
    });
    popover.present({
      ev: ev
    });
  }
 
  //Draw CPU chart
  drawCpu(){
    this.myCpuChart = HighCharts.chart('cpuContainer', {
      chart: {
        type: 'line'
      },
        title: {
          text: 'CPU Utilisation'
      },
      xAxis: {
        categories: ['8am', '10am', '12pm', '2pm','4pm','6pm', '8pm', '10pm', '12am', '2am', '4am']
      },
      yAxis: {
        title: {
          text: 'mCores'
        }
      },
      series: [
        {
          name: 'VM1',
          data: (
            function () {
              var data = []; 
              for (let i = 0; i <= 10; i += 1) { 
                data.push({ x: i, y: Math.floor(Math.random() * 10) + 0 }); 
              } 
              return data; 
            }()
          ) 
        }
      ]
    });
  }

  //Draw NW chart
  drawNw(){
    this.myNwChart = HighCharts.chart('nwContainer', {
      chart: {
        type: 'line'
      },
        title: {
        text: 'NW Utilisation'
      },
      xAxis: {
        categories: ['8am', '10am', '12pm', '2pm','4pm','6pm', '8pm', '10pm', '12am', '2am', '4am']
      },
      yAxis: {
        title: {
          text: 'kB'
        }
      },
      series: [
        {
          name: 'Incoming',
          data: (
            function () {
              var data = []; 
              for (let i = 0; i <= 10; i += 1) { 
                data.push({ x: i, y: Math.floor(Math.random() * 100) + 0 }); 
              } 
              return data; 
            }()
          ) 
        }, {
          name: 'Outgoing',
          data: (
            function () { 
              var data = []; 
              for (let i = 0; i <= 10; i += 1) { 
                data.push({ x: i, y: Math.floor(Math.random() * 100) + 0 }); 
              } 
              return data; 
            }()
          ) 
        }
      ]
    });
  }

  //Draw Disk usage chart
  drawDisk(){
    this.myDiskChart = HighCharts.chart('diskContainer', {
      chart: {
        type: 'line'
      },
        title: {
        text: 'Disk Utilisation'
      },
      xAxis: {
        categories: ['8am', '10am', '12pm', '2pm','4pm','6pm', '8pm', '10pm', '12am', '2am', '4am']
      },
      yAxis: {
        title: {
          text: 'bytes'
        }
      },
      series: [
        {
          name: 'Disk1',
          data: (
            function () {
              var data = []; 
              for (let i = 0; i <= 10; i += 1) { 
                data.push({ x: i, y: Math.floor(Math.random() * 10) + 0 }); 
              } 
              return data; 
            }()
          ) 
        }
      ]
    });
  }
  drawCharts(){
    this.drawCpu();
    this.drawNw();
    if(this.cardItems.length > 2){
      this.drawDisk();
    }
  }
  newCardModal(cardItems){
    let myModal = this.modalCtrl.create(AddCardModalPage, {cardItems: this.cardItems});
    myModal.onDidDismiss((data) => {
      this.cardItems = data;
      if(this.cardItems.length){
        this.drawCharts();  
      }else{
        this.showToast("Metric card Not availble");
      }  
    });
    myModal.present();
  }
  showToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
      showCloseButton: true
    });
    toast.present();
  }
 
  /*loadCards(){
    this.storage.get('cardList').then((data) => {
      this.cardItems = JSON.parse(data);
      console.log("From Load Cards",data);
      
    });
  }*/
  doRefresh(refresher){
    /*this.storage.get('myStore').then((data) => {
      this.items = data;}); */
    if(refresher != 0)
         refresher.complete();
  };
  /*ngOnInit(){
    this.loadCards();
  }*/
  ionViewDidEnter(){    
    if(this.cardItems.length){
      this.drawCharts();  
    }else{
      this.showToast("Metric card not available");
    }    
  }
  ionViewWillEnter(){
    
  }
  clickMainFAB() {
    this.btnVisible = true;
  }
  addBillingCard(){
    this.showBillingCard = true;
    this.showToast("Billing card added successfully.");
  }
  addStatusCard(){
    this.showStatusCard = true;
    this.showToast("Status card added successfully.");
  }

}
