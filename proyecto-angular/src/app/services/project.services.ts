import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Global } from './global';
import { Projects } from '../models/project';


@Injectable()
export class ProjectsServices {
  public url: string;

  constructor(private _http: HttpClient) {

    this.url = Global.url;
   
  }

  testServices() {
    return 'probando el servicio de projects '
  }

  saveProjects(project: Projects): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'save-project', params, { headers: headers });
  }
}
