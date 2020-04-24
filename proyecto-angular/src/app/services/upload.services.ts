import { Global } from './global';
import { Injectable } from '@angular/core';

@Injectable()

export class UploadServices {
  public url: string;
  constructor() {
    this.url = Global.url;
  }

}



