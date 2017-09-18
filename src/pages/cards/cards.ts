import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController } from 'ionic-angular';
import * as HighCharts from 'highcharts';
import { TranslateService } from '@ngx-translate/core';
import { AddCardModalPage } from '../add-card-modal/add-card-modal';
import { CardsProvider } from '../../providers/providers';

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

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController, 
    public translateService: TranslateService, 
    public cards: CardsProvider,
    public loadingCtrl: LoadingController) {
    this.cards.getCards()
    .subscribe(
      (response)=> {
        this.cardItems = response;
        console.log(this.cardItems);
      },
      (error)=>{
        console.log(error);
      });
    this.doRefresh(0);
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
        categories: ['8am', '10am', '12pm', '2pm','4pm','6pm']
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
              for (let i = 0; i <= 5; i += 1) { 
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
        categories: ['8am', '10am', '12pm', '2pm','4pm','6pm']
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
              for (let i = 0; i <= 5; i += 1) { 
                data.push({ x: i, y: Math.floor(Math.random() * 10) + 0 }); 
              } 
              return data; 
            }()
          ) 
        }, {
          name: 'Outgoing',
          data: (
            function () { 
              var data = []; 
              for (let i = 0; i <= 5; i += 1) { 
                data.push({ x: i, y: Math.floor(Math.random() * 10) + 0 }); 
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
        categories: ['8am', '10am', '12pm', '2pm','4pm','6pm']
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
              for (let i = 0; i <= 5; i += 1) { 
                data.push({ x: i, y: Math.floor(Math.random() * 10) + 0 }); 
              } 
              return data; 
            }()
          ) 
        }
      ]
    });
  }
  newCardModal(){
    let myModal = this.modalCtrl.create(AddCardModalPage);
    myModal.present();
  }
  removeCard(){

  }
  doRefresh(refresher){
    /*this.storage.get('myStore').then((data) => {
      this.items = data;}); */
    if(refresher != 0)
         refresher.complete();
  };
  ionViewDidEnter(){
    this.drawCpu();
    this.drawNw();
  }
}
