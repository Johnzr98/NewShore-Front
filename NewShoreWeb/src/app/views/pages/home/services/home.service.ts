import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoutes } from '../models/routes.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getFlightsRoutes(): Observable<IRoutes[]> {
    return this.http.get<IRoutes[]>('https://recruiting-api.newshore.es/api/flights/0');
  }
}
