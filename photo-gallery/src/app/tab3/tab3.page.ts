
import { Component } from '@angular/core';
import * as leaflet from 'leaflet';
import { tileLayer, marker } from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet-routing-machine";
import { AlertController } from '@ionic/angular';
// Add this line to remove typescript errors
declare var L: any;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  map: any;
  isPressed = false;
  L: any;
  point1: leaflet.LatLng = undefined;
  point2: leaflet.LatLng = undefined;
  ngOnInit() {
  }
  constructor(
    private alertCtrl: AlertController) {
  }

  ionViewDidEnter() {
    this.loadmap();
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


  

    this.map.on('click', (e) => {
      if (this.isPressed) {
        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet.marker([e.latlng.lat, e.latlng.lng]).bindPopup('New City')
          .openPopup();
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
        this.isPressed = false;

        if (!this.point1) {
          this.point1 = e.latlng;
        } else {
          this.point2 = e.latlng;

          var control = L.Routing.control({
            waypoints: [
              L.latLng(this.point1.lat, this.point1.lng),
              L.latLng(this.point2.lat, this.point2.lng)
            ],
            router: new L.Routing.osrmv1({
              language: 'en',
              profile: 'car'
            })
          }).addTo(this.map);
          this.point1 = undefined
          this.point2 = undefined
        }
      }
    })
  }


  async showPopup() {
    let alert = (await this.alertCtrl.create({
      message: 'Tap anywhere to add marker. Adding 2 markers will determine a road.',
      buttons: ['Dismiss']
    })).present();
    this.isPressed = true;
  }
}