import { Component } from '@angular/core';

import { PhotoService } from '../services/photo.service';
import {Parse} from 'parse';
import {NavController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService, public navCtrl: NavController, public toastCtrl: ToastController,) { }
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


}
