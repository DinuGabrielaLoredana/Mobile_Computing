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

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  public async loadSaved() {
    /*Retrieve photos from database for each user*/
    var query = new Parse.Query("Pictures");
    query.equalTo("createdBy", Parse.User.current());
    query.select("base64");
    const photos = await query.find();
    this.photos = photos;
    var i = 0;
    for (let photo of this.photos) {
      this.photos[i] = photos[i].get("base64");
      i++;
    }
  }

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

  private async savePicture(cameraPhoto: CameraPhoto) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);

    // Write the file to the data database
    const fileName = new Date().getTime() + ".jpeg";
    const Pictures = Parse.Object.extend("Pictures");
    const myNewObject = new Pictures();
    myNewObject.set("createdBy", Parse.User.current());
    myNewObject.set("base64", base64Data);
    myNewObject.set("FileName", fileName);
    // Get platform-specific photo filepaths
    let position = await this.getPosition();
    console.log(position);
    myNewObject.set("x", position.coords.latitude);
    myNewObject.set("y", position.coords.longitude);
    await myNewObject.save();
    this.loadSaved();
  }

  async getPhotoFromSystem() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Photos, // automatically take a new photo with the camera
      quality: 100, // highest quality (0 to 100)
    });

    //Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);
  }

  async getPosition() {
    return await this.geolocation.getCurrentPosition();
  }

  async removePicture() {
    var query = new Parse.Query("Pictures");
    query.equalTo("base64", this.photos[0]);
    query
      .first()
      .then(function (foundPicture) {
        if (foundPicture != null) {
          foundPicture
            .destroy()
            .then(function (response) {
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
}

interface Photo {
  base64?: string;
  x: number;
  y: number;
}
