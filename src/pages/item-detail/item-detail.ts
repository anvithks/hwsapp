import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item');
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

  ionViewDidEnter(){    
    this.drawNw();
  }

}
