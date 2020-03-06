import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public speed;
  public subscription;
  constructor(private deviceMotion: DeviceMotion) {
    this.watchAcceleration();
  }

  getAcceleration() {
    // Get the device current acceleration
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => this.speed = acceleration,
      (error: any) => console.log(error)
    );
  }
  watchAcceleration(){
    // Watch device acceleration
    this.subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
    });
  }
  
  stopWatchAcceleration(){
    // Stop watch
    this.subscription.unsubscribe();
  }

  
}
