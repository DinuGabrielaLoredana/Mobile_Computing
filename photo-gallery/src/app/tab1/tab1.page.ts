import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public x;
  public y;
  public z;
  public subscription;
  ngOnInit() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  constructor(private deviceMotion: DeviceMotion) {
    this.watchAcceleration();
  }

  getAcceleration() {
    // Get the device current acceleration
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => this.x = acceleration.x,
      (error: any) => console.log(error)
    );
  }
  watchAcceleration(){
    // Watch device acceleration
    this.subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.x = acceleration.x;
      this.y = acceleration.y;
      this.z = acceleration.z;
    });
  }
  
  stopWatchAcceleration(){
    // Stop watch
    this.subscription.unsubscribe();
  }

  
}
