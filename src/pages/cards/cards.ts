import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import * as HighCharts from 'highcharts';
/*import { ModalPage } from './modal-page';*/
@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.cardItems = [
      {
        card: {
          icon: 'settings',
          name: 'CPU of VM lamp-1-vm'
        },
        chartId:'cpuContainer',
        date: 'CPU Utilisation',
        content: '',
      },
      {
        card: {
          icon: 'wifi',
          name: 'Network of VM lamp-1-vm'
        },
        chartId:'nwContainer',
        date: 'Network Utilisation',
        content: '',
      },
      {
        card: {
          icon: 'logo-usd',
          name: 'Billing'
        },
        date: 'Approximate charges so far for this month:',
        content: '$399'
      }
    ];

  }
  newCard(){
      this.cardItems.push( {
        card: {
          icon: 'wifi',
          name: 'Network'
        },
        chartId:'nwContainer',
        date: 'Network Utilisation',
        content: '',
      });
      this.refreshPage();
  }
  refreshPage() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  ionViewDidLoad(){
    var myChart = HighCharts.chart('cpuContainer', {
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
    var myNwChart = HighCharts.chart('nwContainer', {
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
}
