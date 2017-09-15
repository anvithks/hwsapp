import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuProvider {

  constructor(public http: Http) {
    console.log('Hello MenuProvider Provider');
  }
  getMenus(){
	  return this.http.get('assets/data/menus.json')
	   .map((response:Response)=>response.json());
	}

}
