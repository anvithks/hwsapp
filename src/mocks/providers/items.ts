import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "Elastic Cloud Server",
        "about": "4 VMs"
      },
      {
        "name": "Cloud Container Engine",
        "about": "2 Clusters"
      },
      {
        "name": "Elastic Volume Service",
        "about": "4 Disks"
      },
      {
        "name": "Data Express Service",
        "about": "No instance found."
      },
      {
        "name": "Scalable File Service",
        "about": "No Instance Found"
      },
      {
        "name": "VPC",
        "about": "2 instances"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
