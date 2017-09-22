import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
        "name": "Elastic Cloud Server",
        "type" : "ecs",
        "icon": "icon-ecs",
        "instanceCount": "4 VMs",
        "instances": [
          {
            "instanceName":"ECS 1",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "ecs-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]
          }]
         };           
          


  constructor(public http: Http) {
    let items = [
      {
        "name": "Elastic Cloud Server",
        "type" : "ecs",
        "icon": "icon-ecs",
        "instanceCount": "4 VMs",
        "instances": [
          {
            "instanceName":"ECS 1",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "ecs-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          },
          {
            "instanceName":"ECS 2",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "m1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "c1-xian", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.215",
                "internalIP" : "10.128.0.7"
            },
            "instanceDisks" : "ecs-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          },
          {
            "instanceName":"ECS 3",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-2xlarge", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "southchina", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.216",
                "internalIP" : "10.128.0.5"
            },
            "instanceDisks" : "ecs-storage-vol-3",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          },
          {
            "instanceName":"ECS 4",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "m1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "eastchina", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.217",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "ecs-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          }
        ]
      },
      {
        "name": "Cloud Container Engine",
        "type" : "cce",
        "icon": "icon-cce",
        "instanceCount": "2 Clusters",
        "instances": [
          {
            "instanceName":"CCE 1",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "cce-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ] 
          },
          {
            "instanceName":"CCE 2",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "cce-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ] 
          }
        ]
      },
      {
        "name": "Elastic Volume Service",
        "type" : "evs",
        "icon": "icon-evs",
        "instanceCount": "4 Disks",
        "instances": [
          {
            "instanceName":"EVS 1",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "evs-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]
            
          },
          {
            "instanceName":"EVS 2",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "evs-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]
            
          },
          {
            "instanceName":"EVS 3",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "evs-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]
            
          },
          {
            "instanceName":"EVS 4",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "evs-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]
            
          }
        ]
      },
      {
        "name": "Bare Metal Server",
        "type" : "bms",
        "icon": "icon-bms",
        "instanceCount": "No instance found.",
        "instances":[]
      },
      {
        "name": "Image Management Service",
        "type" : "ims",
        "icon": "icon-ims",
        "instanceCount": "No Instance Found",
        "instances":[]
      },
      {
        "name": "Auto Scale",
        "type" : "autoscale",
        "icon": "icon-auto",
        "instanceCount": "2 instances",
        "instances":[
          {
            "instanceName":"AS 1",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "as-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          },
          {
            "instanceName":"AS 2",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "as-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          }
        ]
      },
      {
        "name": "Data Express Service",
        "type" : "des",
        "icon": "icon-des",
        "instanceCount": "2 instances",
        "instances":[
          {
            "instanceName":"DES 1",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "des-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          },
          {
            "instanceName":"DES 2",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "des-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]
            
          }
        ]
      },
      {
        "name": "VPC",
        "type" : "vpc",
        "icon": "icon-vpc",
        "instanceCount": "2 instances",
        "instances":[
          {
            "instanceName":"VPC 1",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "vpc-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          },
          {
            "instanceName":"VPC 2",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "vpc-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          }
        ]
      },
      {
        "name": "ELB",
        "type" : "elb",
        "icon": "icon-elb",
        "instanceCount": "2 instances",
        "instances":[
          {
            "instanceName":"ELB 1",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "elb-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          },
          {
            "instanceName":"ELB 2",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "elb-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          }
        ]
      },
      {
        "name": "VPN",
        "type" : "vpn",
        "icon": "icon-vpn",
        "instanceCount": "2 instances",
        "instances":[
          {
            "instanceName":"VPN 1",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "vpn-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          },
          {
            "instanceName":"VPN 2",
            "instanceStatus": "Running",
            "instanceDetails": {
                "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                "externalIP" : "104.197.97.213",
                "internalIP" : "10.128.0.4"
            },
            "instanceDisks" : "vpn-storage-vol-2",
            "instancePerms" : {
              "userInfo" : "Disabled",
              "cce" : "read/write",
              "evs" : "read only",
              "taskQueue": "Disabled"
            },
            "instanceMetrics" : [
              {
                "name" : "CPU Utilization (%)",
                "type" : "cpu"
              },
              {
                "name" : "Network Traffic (Bytes/sec)",
                "type" : "network"
              },
              {
                "name" : "Data Traffic (Bytes/sec)",
                "type" : "data"
              }
            ]            
          }
        ]
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
