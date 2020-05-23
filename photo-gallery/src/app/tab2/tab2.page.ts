import { Component } from '@angular/core';

import { PhotoService } from '../services/photo.service';
import {Parse} from 'parse';
import {NavController, ToastController} from '@ionic/angular';
import { LocalNotifications, ILocalNotification } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService, public navCtrl: NavController, public toastCtrl: ToastController,
    private localNotifications: LocalNotifications) { }
  ngOnInit() {
    this.photoService.loadSaved();
    
    
  }

  logOut() {
    Parse.User.logOut().then((resp) => {
      console.log('Logged out successfully', resp);

      this.navCtrl.navigateRoot('login');
    }, err => {
      console.log('Error logging out', err);

      this.toastCtrl.create({
        message: 'Error logging out',
        duration: 2000
      });
    })
  }
  ionViewDidEnter() {
    this.onEnterSendNotification();
  }
  onEnterSendNotification(){
    this.sendNotifications({
      id: 1,
      title: 'New notification',
      text: 'Welcome back, my friend.'
   });
  }

  sendNotifications(notifications: ILocalNotification | ILocalNotification[]) {
    return this.localNotifications.hasPermission().then((hasPermission) => {
        if (hasPermission) {
            this.localNotifications.schedule(notifications);
        } else {
            this.localNotifications.requestPermission().then((hasPermission) => {
                if (hasPermission) {
                    this.localNotifications.schedule(notifications);
                }
            });
        }
    });
}


}
