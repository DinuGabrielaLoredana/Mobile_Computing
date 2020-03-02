import { Component, OnInit } from '@angular/core';
import {Parse} from 'parse';
import {NavController, ToastController, AlertController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //constructor(private  authService:  AuthService, private  router:  Router) { }
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {

  }
  ngOnInit() {
  }
  username: string;
  password: string;

  

  signUp() {
    Parse.User.signUp(this.username, this.password).then((resp) => {
      console.log('Logged in successfully', resp);

      // Clears up the form
      this.username = '';
      this.password = '';

      this.toastCtrl.create({
        message: 'Account created successfully',
        duration: 2000
      });
    }, async err => {
        let alert = (await this.alertCtrl.create({
          message: 'Account with this credentials already exists',
          buttons: ['Dismiss']
        })).present();

      this.toastCtrl.create({
        message: err.message,
        duration: 2000
      });
    });
  }

  signIn() {
    Parse.User.logIn(this.username, this.password).then((resp) => {
      console.log('Logged in successfully', resp);

      // If you app has Tabs, set root to TabsPage
      this.navCtrl.navigateRoot('tabs/tab2')
    }, async err => {
      let alert = (await this.alertCtrl.create({
        message: 'Invalid credentials.',
        buttons: ['Dismiss']
      })).present();

      this.toastCtrl.create({
        message: err.message,
        duration: 2000
      });
    });
  }

 

}

