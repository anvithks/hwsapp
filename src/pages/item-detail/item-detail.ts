import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, LoadingController } from 'ionic-angular';
import * as HighCharts from 'highcharts';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  myNwChart: any;
  isStarted: boolean;
  isTerminated: boolean;
  instanceDetails: any = {};
  private JSObject: Object = Object;


  constructor(public navCtrl: NavController,
   navParams: NavParams,
   items: Items,
   public modalCtrl: ModalController,
   public toastCtrl: ToastController,
   public loadingCtrl: LoadingController) {
    this.item = navParams.get('item');
    this.item.showDetails = false;
    this.isStarted = true;
    this.isTerminated = false;
    console.log("Details Of:", this.item, this.item.instanceInfo);
    this.instanceDetails = this.item.instanceInfo;
    //this.instanceDetails.push(this.item.instancePerms)
    console.log("Array: ", this.instanceDetails);
  }

  presentLoadingDefault(action: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Please wait...',
      dismissOnPageChange: true,
      duration: 3000
    });
    loading.onDidDismiss(() => {
    	switch (action) {
    		case "start":
    			this.showToast("Service is being started.")
    			break;
    		case "stop":
    			this.showToast("Service is being stopped.")
    			break;
    		case "restart":
    			this.showToast("Service is being restarted.")
    			break;
    		case "terminate":
    			this.showToast("Service is being terminated.")
    			break;
    		default:
    			this.showToast("Something went wrong. Please try again.")
    			break;
    	}
    });
    loading.present();
  }
   drawNw(){
    this.myNwChart = HighCharts.chart('nwItemContainer', {
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
  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
    } else {
        data.showDetails = true;
    }
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
  start(){
  	this.isStarted = true;
  	this.presentLoadingDefault('start');
  	
  }

  stop(){
  	this.isStarted = false;
  	this.presentLoadingDefault('stop');	
  }
  restart(){
  	this.isStarted = true;
  	this.presentLoadingDefault('restart');
  }
  terminate(){
  	this.isStarted = false;
  	this.isTerminated = true;
  	this.presentLoadingDefault('terminate');
  }
  ionViewDidEnter(){    
    this.drawNw();
  }

}
