import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCardModalPage } from './add-card-modal';

@NgModule({
  declarations: [
    AddCardModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCardModalPage),
  ],
})
export class AddCardModalPageModule {}
