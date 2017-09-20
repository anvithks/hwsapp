import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { IonicStorageModule, Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the CardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsProvider {
  cardList: any;
  constructor(public http: Http, public storage: Storage) {
    console.log('Hello CardsProvider Provider');
    this.storage.set('hwsStatusCard', true);
    this.storage.set('billingCard', true);
  }
	getCards(){
		return this.http.get('assets/data/cardItems.json')
		.map((response:Response)=>response.json())
    /*.subscribe(
      (response)=> {
        this.cardList = response;
        this.storage.set('cardList', JSON.stringify(this.cardList));
        console.log("From Provider", this.cardList);
      },
      (error)=>{
        console.log(error);
      });*/
	}

}
