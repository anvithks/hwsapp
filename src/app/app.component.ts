import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import { MenuProvider } from '../providers/menu/menu';
import { CardsProvider } from '../providers/cards/cards';

@Component({
  templateUrl: 'app.html'
})
export class HWSApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any; /*= [
    
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' },
    { title: 'HWS Cloud', component: 'HWSPage' }
    /*{ title: 'Tutorial', component: 'TutorialPage' },*/
    /*{ title: 'Cards', component: 'CardsPage' },*/
    /*{ title: 'Content', component: 'ContentPage' },*/
    /*{ title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },*/
    /*{ title: 'Map', component: 'MapPage' },*/
    /*{ title: 'Master Detail', component: 'ListMasterPage' },*/
    /*{ title: 'Menu', component: 'MenuPage' },    
  ]; */
  showLevel1 = null;
  showLevel2 = null;

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, public menu: MenuProvider, public cards: CardsProvider) {
    this.initTranslate();
    this.menu.getMenus()
    .subscribe((response)=> {
        this.pages = response;
        console.log(this.pages);
    });
    /*for(let key in this.pages){
      let value = this.pages[key];
      
    }*/
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };
}
