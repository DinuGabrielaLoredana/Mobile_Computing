import { Component } from "@angular/core";
import * as leaflet from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet-routing-machine";
import { AlertController } from "@ionic/angular";
import { Parse } from "parse";
import { PhotoService } from "../services/photo.service";
import { Router } from "@angular/router";
/* Add this line to remove typescript errors */
declare var L: any;
@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  map: any;
  isPressed = false;
  isMapLoaded = false;
  L: any;
  point1: leaflet.LatLng = undefined;
  point2: leaflet.LatLng = undefined;
  control: any = null;
  marker = new Array();
  photosMarker = new Array();
  ngOnInit() {}
  constructor(
    private alertCtrl: AlertController,
    public photoService: PhotoService,
    private router: Router
  ) {}

  ionViewDidEnter() {
    /*When the user enters the page, display the map and its data*/
    if (!this.isMapLoaded) {
      this.loadmap();
      this.isMapLoaded = true;
    }
  }
  public fu(e) {
    this.photoService.loadFiltered(e);
    this.router.navigate(["tabs/tab2"]);
  }
  async loadmap() {
    /* Load a map and display it into the previously empty div */
    this.map = leaflet.map("mapId3").fitWorld();
    leaflet
      .tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      })
      .addTo(this.map);
    /* Get the users current location and add a default marker there */
    this.map
      .locate({
        setView: true,
        maxZoom: 10,
      })
      .on("locationfound", (e) => {
        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet
          .marker([e.latitude, e.longitude])
          .openPopup()
          .bindPopup("CurrentLocation");
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
      })
      .on("locationerror", (err) => {
        alert(err.message);
      });
    /*Get all the photos taken by the current user*/
    var query = new Parse.Query("Pictures");
    query.equalTo("createdBy", Parse.User.current());
    query.select("base64", "x", "y");
    const results = await query.find();
    /*Iterate through the current user's pictures*/
    for (let result of results) {
      /*Find all pictures taken at a certain location b the current user*/
      var query = new Parse.Query("Pictures");
      query.equalTo("createdBy", Parse.User.current());
      query.equalTo("x", result.get("x"));
      query.equalTo("y", result.get("y"));
      query.select("base64", "x", "y");
      const secondResults = await query.find();
      /* Add pictures taken at the same location to the same marker */
      var imgSrc = '<div style="width: 110px; height: 110px; overflow: auto;">';
      for (let secondResult of secondResults) {
        imgSrc = imgSrc + "<img src=" + secondResult.get("base64") + ">";
      }
      imgSrc = imgSrc + "</div>";
      imgSrc = imgSrc + '<button type="button" See photos</button>';
      /*Add markers with pictures to the map */
      let marker: any = leaflet
        .marker([result.get("x"), result.get("y")])
        .addTo(this.map)
        .on("click", (e) => {
          this.fu(e);
        })
        .bindPopup(imgSrc)
        .on("mouseover", function (e) {
          this.openPopup();
        });

      this.photosMarker.push(marker);
      this.map.addLayer(marker);
    }

    /*If the user clicks on the map after previously he pressed the button add a marker, then add a marker at the current loction and mark the button as not presser*/
    this.map.on("click", (e) => {
      if (this.isPressed) {
        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet
          .marker([e.latlng.lat, e.latlng.lng])
          .bindPopup("New City")
          .openPopup();
        markerGroup.addLayer(marker);
        this.marker.push(marker);
        this.map.addLayer(markerGroup);
        this.isPressed = false;
        /*If it is the second time the user places a marker manually...*/
        if (!this.point1) {
          this.point1 = e.latlng;
        } else {
          this.point2 = e.latlng;
          /*Then check if there is another route already created. If it is remove it. In both cases, create a route between the two points*/
          if (this.control != null) {
            this.removeRoute();
          } else {
          }

          this.control = L.Routing.control({
            waypoints: [
              L.latLng(this.point1.lat, this.point1.lng),
              L.latLng(this.point2.lat, this.point2.lng),
            ],
            router: new L.Routing.osrmv1({
              language: "en",
              profile: "car",
            }),
          }).addTo(this.map);
          this.point1 = undefined;
          this.point2 = undefined;
        }
      }
    });
  }
  /*Remove a route between 2 points from the map*/
  async removeRoute() {
    if (this.control != null) {
      this.map.removeControl(this.control);
      this.control = null;
    }
  }
  /*Show a popup when pressing the button to inform the user that if he clicks on he map, he will create a marker*/
  async showPopup() {
    let alert = (
      await this.alertCtrl.create({
        message:
          "Tap anywhere to add marker. Adding 2 markers will determine a road.",
        buttons: ["Dismiss"],
      })
    ).present();
    this.isPressed = true;
  }

  /*Delete all te markers which were manually placed on the map*/
  async deleteAllMarkers() {
    var iterator;
    this.removeRoute();
    for (iterator = 0; iterator < this.marker.length; iterator++) {
      this.map.removeLayer(this.marker[iterator]);
    }
  }
}
