import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsProvider {

  constructor(public http: Http) {
    console.log('Hello CardsProvider Provider');
  }
	getCards(){
		return this.http.get('assets/data/cardItems.json')
		.map((response:Response)=>response.json());
	}

}
