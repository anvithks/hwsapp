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
            ],
            "instanceTabs":[
               {
                 "name" : "Status",
                 "icon": "pulse",
                 "showDetails": false,
                 "details":{
                   "state":"Running"
                  }
               },
               {
                 "name": "Info",
                 "icon" : "speedometer",
                 "showDetails": false,
                 "details":{
                    "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                    "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                    "externalIP" : "104.197.97.213",
                    "internalIP" : "10.128.0.4"
                  }
               },
               {
                 "name": "Disks",
                 "icon" : "albums",
                 "showDetails": false,
                 "details":{
                   "volume": "ecs-storage-vol-2"
                  }
               },
               {
                 "name": "Permissions",
                 "icon" : "list",
                 "showDetails": false,
                 "details":{
                    "userInfo" : "Disabled",
                    "cce" : "read/write",
                    "evs" : "read only",
                    "taskQueue": "Disabled"
                  }
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
            ],
            "instanceTabs": [
            {
                "name" : "Status",
                "icon": "pulse",
                "showDetails": false,
                "details" : {
                  "state": "Running" 
                }
             },
             {
                "name" : "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details" : {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume" : "ecs-storage-vol-2" 
                }
              },
              {
                "name": "Permisssions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }

            ]         
          },
          {
            "instanceName":"ECS 2",
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
            ],
            "instanceTabs" :[
              {
                "name" : "Status",
                "icon": "pulse",
                "showDetails": false,
                "details" : {
                  "state": "Running" 
                }
              },
              {
                "name" : "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details" : {
                  "machineType": "m1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "c1-xian", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.215",
                  "internalIP" : "10.128.0.7"
                }
              },
              {
                "name" : "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details" : {
                  "volume": "ecs-storage-vol-2" 
                }
              },              
              {
                "name" : "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details" : {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled" 
                }
              }
            ]
          },
          {
            "instanceName":"ECS 3",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                   "state": "Abnormal"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-2xlarge", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "southchina", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.216",
                  "internalIP" : "10.128.0.5"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume" : "ecs-storage-vol-3"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }
            ]                        
          },
          {
            "instanceName":"ECS 4",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state" : ""
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "m1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "eastchina", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.217",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume" : ""
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
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
            ],            
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"cce-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }
            ]
          },
          {
            "instanceName":"CCE 2",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"cce-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                   "volume": "evs-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                   "userInfo" : "Disabled",
                   "cce" : "read/write",
                   "evs" : "read only",
                   "taskQueue": "Disabled"
                }
              }
            ]            
          },
          {
            "instanceName":"EVS 2",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"evs-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }
            ]            
          },
          {
            "instanceName":"EVS 3",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"evs-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                   "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }
            ]            
          },
          {
            "instanceName":"EVS 4",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"evs-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                   "volume":"as-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }
            ]           
          },
          {
            "instanceName":"AS 2",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"as-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"des-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }
            ]          
          },
          {
            "instanceName":"DES 2",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"des-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"vpc-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }
            ]            
          },
          {
            "instanceName":"VPC 2",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"vpc-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"elb-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }
            ]            
          },
          {
            "instanceName":"ELB 2",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"elb-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"vpn-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
              }
            ]            
          },
          {
            "instanceName":"VPN 2",
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
            ],
            "instanceTabs":[
              {
                "name": "Status",
                "icon": "pulse",
                "showDetails": false,
                "details": {
                  "state": "Running"
                }
              },
              {
                "name": "Info",
                "icon" : "speedometer",
                "showDetails": false,
                "details": {
                  "machineType": "c1-medium", //c1-large, c1-2xlarge, m1-medium, l1-large
                  "zone": "us-central1-a", //c1-xian, southchina, northchina, eastchina 
                  "externalIP" : "104.197.97.213",
                  "internalIP" : "10.128.0.4"
                }
              },
              {
                "name": "Disks",
                "icon" : "albums",
                "showDetails": false,
                "details": {
                  "volume":"vpn-storage-vol-2"
                }
              },
              {
                "name": "Permissions",
                "icon" : "list",
                "showDetails": false,
                "details": {
                  "userInfo" : "Disabled",
                  "cce" : "read/write",
                  "evs" : "read only",
                  "taskQueue": "Disabled"
                }
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
