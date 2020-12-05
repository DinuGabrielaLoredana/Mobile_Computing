import { Injectable } from "@angular/core";
import {
  Plugins,
  CameraResultType,
  Capacitor,
  FilesystemDirectory,
  CameraPhoto,
  CameraSource,
} from "@capacitor/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";

import { Platform } from "@ionic/angular";
import { Parse } from "parse";
/*Account detalis for parse server*/
Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(
  "fBH0iXfHrI240kb14RHPz6mKbruyu378kf0a1750",
  "vhfNgHY4SodTFw0eiyzXWzYxtj0u1PNNVdXne5cC",
  "j9NPZJoJPwAGV0UlFnPdAXv7wdlVj8rx8wa1yZvD"
);

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";
  private platform: Platform;

  constructor(platform: Platform, private geolocation: Geolocation) {
    this.platform = platform;
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // "hybrid" will detect Cordova or Capacitor
    if (this.platform.is("hybrid")) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: cameraPhoto.path,
      });

      return file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(cameraPhoto.webPath);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }
  }
  /*When a photo is taken it will be returned as blob but I want to store it as a string so I will convert it to base64*/
  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  /*Method retrieves photos from the database for the current user and saves them in our local array*/
  public async loadSaved() {
    /*Retrieve photos from database for each user*/
    var query = new Parse.Query("Pictures");
    query.equalTo("createdBy", Parse.User.current());
    query.select("base64");
    const photos = await query.find();
    this.photos = photos;
    var i = 0;
    /*save photos retrieved in local array*/
    for (let photo of this.photos) {
      this.photos[i] = photos[i].get("base64");
      i++;
    }
  }

  /*After taking a pcture, save it in the database*/
  private async savePicture(cameraPhoto: CameraPhoto) {
    /* Convert photo to base64 format, required by Filesystem API to save*/
    const base64Data = await this.readAsBase64(cameraPhoto);

    /* Create a name for the photo based on the current time and date it was taken*/
    const fileName = new Date().getTime() + ".jpeg";
    const Pictures = Parse.Object.extend("Pictures");
    const myNewObject = new Pictures();
    myNewObject.set("createdBy", Parse.User.current());
    myNewObject.set("base64", base64Data);
    myNewObject.set("FileName", fileName);
    /* Get the geolocation coordinates at which the photo was taken to later add it to the map*/
    let position = await this.getPosition();
    myNewObject.set("x", position.coords.latitude);
    myNewObject.set("y", position.coords.longitude);
    /* Write the file to the data database*/
    await myNewObject.save();
    /* Reload all photos from the galery in order to add also the new taken one */
    this.loadSaved();
  }

  /* Actually take a photo by using the device camera */
  async getPhotoFromSystem() {
    const capturedPhoto = await Camera.getPhoto({
      /* file-based data; provides best performance */
      resultType: CameraResultType.Uri,
      /* automatically take a new photo with the camera */
      source: CameraSource.Photos,
      /* highest quality (0 to 100) */
      quality: 100,
    });

    /* Save the picture and add it to photo collection */
    const savedImageFile = await this.savePicture(capturedPhoto);
  }

  /* Get the user's current geolocation coordinates */
  async getPosition() {
    return await this.geolocation.getCurrentPosition();
  }

  /* Deletes a picture from the database */
  async removePicture() {
    var query = new Parse.Query("Pictures");
    /* Find the clicked picture in the database by its string*/
    query.equalTo("base64", this.photos[0]);
    query
      .first()
      .then(function (foundPicture) {
        /*If we found a picture, then delete it*/
        if (foundPicture != null) {
          foundPicture
            .destroy()
            .then(function (response) {
              /*Reload page so the removed photo no longer appears in our gallery*/
              window.location.reload(true);
            })
            .catch(function (response, error) {
              console.log("Error: " + error.message);
            });
        }
      })
      .catch(function (error) {
        console.log("Error: " + error.code + " " + error.message);
        return null;
      });
  }

  /*Outdated function*/
  private async getPhotoFile(cameraPhoto, fileName) {
    if (this.platform.is("hybrid")) {
      // Get the new, complete filepath of the photo saved on filesystem
      const fileUri = await Filesystem.getUri({
        directory: FilesystemDirectory.Data,
        path: fileName,
      });

      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: fileUri.uri,
        webviewPath: Capacitor.convertFileSrc(fileUri.uri),
      };
    } else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath,
      };
    }
  }
}

interface Photo {
  base64?: string;
  x: number;
  y: number;
}
