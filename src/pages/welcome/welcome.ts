import { Component } from '@angular/core';
import { IonicPage, NavController, Platform} from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
declare var cordova:any;
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public platform: Platform) {
  	this.platform = platform;
  }

  login() {
    this.navCtrl.push('LoginPage');
  }
  launch(url) {
	    this.platform.ready().then(() => {
	        cordova.InAppBrowser.open(url, "_self", "location=true");
	    });
	}

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
