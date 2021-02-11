import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpcallService {

  // tslint:disable-next-line:variable-name
  private _checkJson = '../assets/js/serviceCall.json';
  private val = false;
  constructor(private httpClient: HttpClient) { }

  getdata(param): Observable<object> {

  return this.httpClient.get(this._checkJson, param);

  }

  isAuthenticated() {
    return this.val;
  }


}
