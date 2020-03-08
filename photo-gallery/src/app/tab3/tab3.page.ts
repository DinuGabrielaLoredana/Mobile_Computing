
import { Component } from '@angular/core';
import * as leaflet from 'leaflet';
import {tileLayer,marker} from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  propertyList = [];
  map: any;
  constructor(
    private alertCtrl: AlertController) {
  }

  ionViewDidEnter() {
    this.loadmap();
    fetch('../assets/data.json').then(res => res.json())
    .then(json =>{
      this.propertyList = json.properties;
      this.leafletMap();
    })   
  }
  
  addMarker(e){
     // Add marker to map at click location; add popup window
    marker(new leaflet.LatLng(e.latlng.lat, e.latlng.lng)).addTo(this.map).bindPopup("New city")
    .openPopup();
  }
  leafletMap(){
    for(const property of this.propertyList){
      marker([property.lat,property.long]).addTo(this.map)
      .bindPopup(property.city)
      .openPopup();
    }

  }

  loadmap() {
    
    this.map = leaflet.map("mapId3").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18
    }).addTo(this.map);
    
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).bindPopup('Craiova')
      .openPopup();
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })

    //this.map.on('click', this.addMarker);
  }

  async showPopup(){
    let alert = ( await this.alertCtrl.create({
      message: 'Tap anywhere to add marker',
      buttons: ['Dismiss']
    })).present();
  }
}