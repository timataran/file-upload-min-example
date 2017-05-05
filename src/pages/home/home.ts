import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fileTransfer: TransferObject;
  private endpoint: string = "http://10.244.244.2:5000/upload";
  private filename: string = "file:///system/build.prop";
  private state: string = 'IDLE';

  constructor(public navCtrl: NavController, private transfer: Transfer,
              private platform: Platform) {
    this.platform.ready().then(res => {
      this.fileTransfer = this.transfer.create();
    });
  }

  public uploadFile():void{
    this.state = 'UNDEFINED';
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'build.prop'
    };
    this.fileTransfer.upload(this.filename, this.endpoint, options, true)
      .then((data) => {
        // success
        this.state = 'SUCCESS';
        console.log(data);
      }, (err) => {
        // error
        this.state = 'ERROR';
        console.log(err);
      }).catch((ex) => {
        // it's not in examples but anyway
        this.state = 'Exception';
        console.log(ex);
      });
  }

}
