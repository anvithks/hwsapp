import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, MenuController, LoadingController} from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { domain: string, email: string, password: string } = {
    domain: 'hwclouds',
    email: 'test@example.com',
    password: 'test'
  };
  public loginType: any;
  public rememberUsername: any;
  public anotherAcct: any;
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public menu: MenuController,
    public loadingCtrl: LoadingController) {

    this.loginType = 'Domain';
    this.translateService.get('LOGIN_SUCCESS').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    loading.present();
  }
  // Attempt to login in through our User service
  doLogin() {
    this.presentLoadingDefault();
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);      
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 2500,
        position: 'top'
      });
      toast.present();
    });
  }
  ionViewDidEnter() {
    //to disable menu, or
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // to enable menu.
    this.menu.enable(true);
  }
}
