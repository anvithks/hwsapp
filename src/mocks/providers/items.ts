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
        "icon": "icon-ecs",
        "about": "4 VMs"
      },
      {
        "name": "Cloud Container Engine",
        "icon": "icon-cce",
        "about": "2 Clusters"
      },
      {
        "name": "Elastic Volume Service",
        "icon": "icon-evs",
        "about": "4 Disks"
      },
      {
        "name": "Bare Metal Server",
        "icon": "icon-bms",
        "about": "No instance found."
      },
      {
        "name": "Image Management Service",
        "icon": "icon-ims",
        "about": "No Instance Found"
      },
      {
        "name": "Auto Scale",
        "icon": "icon-auto",
        "about": "2 instances"
      },
      {
        "name": "Data Express Service",
        "icon": "icon-des",
        "about": "2 instances"
      },
      {
        "name": "VPC",
        "icon": "icon-vpc",
        "about": "2 instances"
      },
      {
        "name": "ELB",
        "icon": "icon-elb",
        "about": "2 instances"
      },
      {
        "name": "VPN",
        "icon": "icon-vpn",
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
