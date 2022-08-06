import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFlight } from '../models/flight.interface';
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

  public getFlights(body: IRoute, category: number = 0): Observable<IFlight[]> {
    return this.http.post<IFlight[]>(`${this.base_url}/GetAllFlights/${category}`, body);
  }
}
