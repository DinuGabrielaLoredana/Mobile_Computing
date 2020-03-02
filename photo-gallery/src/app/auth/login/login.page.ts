import { Component, OnInit } from '@angular/core';
import {Parse} from 'parse';
import {NavController, ToastController} from '@ionic/angular';

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
    }, err => {
      console.log('Error signing in', err);

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
    }, err => {
      console.log('Error logging in', err);

      this.toastCtrl.create({
        message: err.message,
        duration: 2000
      });
    });
  }

 

}

