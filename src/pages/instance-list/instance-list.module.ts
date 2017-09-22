import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstanceListPage } from './instance-list';

@NgModule({
  declarations: [
    InstanceListPage,
  ],
  imports: [
    IonicPageModule.forChild(InstanceListPage),
  ],
})
export class InstanceListPageModule {}
