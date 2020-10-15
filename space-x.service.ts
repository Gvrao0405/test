import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable,of} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  
  _baseUrl = "https://api.spaceXdata.com/v3/launches?limit=10"
  constructor(private _http:HttpClient) { }

  getAllDataBeforeInput() {
    return this._http.get(this._baseUrl).
    pipe(map(this.extractData),catchError(this.handleError<any>('Skill Data Get Failed')));
  }

  getAllYearData(launch_year:number) {
    return this._http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${launch_year}`).
    pipe(map(this.extractData),catchError(this.handleError<any>('Skill Data Get Failed')));
  }
  getAllLaunchData(isTrue:boolean) {
    return this._http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${isTrue}`).
    pipe(map(this.extractData),catchError(this.handleError<any>('Skill Data Get Failed')));
  }

  extractData(res: Response) {
    let body=res;
    // console.log(body);
    return body || {};
  }
  private handleError<T> (operation = 'operation' , result ?: T){
    return (error:any):Observable<T> =>{
      console.error(error);
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
