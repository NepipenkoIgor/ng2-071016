import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class ProfileService {

  constructor(private _http:Http) {

  }

  public getUser():Observable<any>{
    return this._http.get('http://learn.javascript.ru/courses/groups/api/participants?key=1r6w6r6')
      .map(res=>res.json())
      .catch(err=>Observable.of([]))
  }

}
