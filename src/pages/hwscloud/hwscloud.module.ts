import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HWSPage } from './hwscloud';

@NgModule({
  declarations: [
    HWSPage,
  ],
  imports: [
    IonicPageModule.forChild(HWSPage),
    TranslateModule.forChild()
  ],
  exports: [
    HWSPage
  ]
})
export class HWSPageModule { }
