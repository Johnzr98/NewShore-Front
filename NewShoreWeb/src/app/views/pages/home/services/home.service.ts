import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IJourney } from '../models/journey.interface';
import { IRoute } from '../models/route.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public base_url: string = environment.base_url;

  constructor(private http: HttpClient) { }

  public getFlightsRoutes(category: number = 0): Observable<IRoute[]> {
    return this.http.get<IRoute[]>(`${this.base_url}/GetFlightsRoutes/${category}`);
  }

  public getJourney(body: IRoute, category: number = 0): Observable<IJourney> {
    return this.http.post<IJourney>(`${this.base_url}/GetAllFlights/${category}`, body);
  }
}
