import { Component } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  pickupLocation: string;
   
  // The constructor below is changed
  constructor(private router:Router,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.pickupLocation = this.router.getCurrentNavigation().extras.state.pickupLocation;
      }
    });
  }
  
onpickupClick(){
    this.router.navigate(['pickup-location']);
  }
}
