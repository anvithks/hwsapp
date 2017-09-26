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

  pages: any= [
    
    { title: 'Login / Signup', component: 'WelcomePage', icon: "person"},
    { title: 'Home', component: 'TabsPage', icon: "home"},
    { title: 'Services', component: 'ListMasterPage', icon: "list-box"},    
    { title: 'Incidents', component: 'ContentPage', icon: "alert"},
    { title: 'Logs', component: 'ContentPage', icon: "clipboard"},
    { title: 'Error Reporting', component: 'ContentPage', icon: "warning"},
    { title: 'Trace', component: 'ContentPage', icon: "disc"},
    { title: 'Permissions', component: 'ContentPage', icon: "people"}
  ];
  billingPages: any = [
    { title: 'Billing', component: 'ContentPage', icon: "cash"}
  ];
  accountPages: any = [
    { title: 'Settings', component: 'SettingsPage', icon: "options"},
    { title: 'Account', component: 'HWSPage', icon: "person"},
    { title: 'Help & Support', component: 'ContentPage', icon: "bug"}
  ];

  showLevel1 = null;
  showLevel2 = null;

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, public menu: MenuProvider, public cards: CardsProvider) {
    this.initTranslate();
    /*this.menu.getMenus()
    .subscribe((response)=> {
        this.pages = response;
        console.log(this.pages);
    });*/
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
  isActive(page: any) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.component) {
        return 'primary';
      }
      return;
    }
  };

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}
