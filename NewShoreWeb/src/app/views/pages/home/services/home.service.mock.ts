import { Observable, of } from 'rxjs';
import { IRoute } from '../models/route.interface';
import { IFlight } from '../models/flight.interface';

export class MockHomeService {

  dataRoutes: IRoute = {
    departureStation: 'BOG',
    arrivalStation: 'MED',
  }
  
  dataFlight: IFlight = {
    departureStation: 'BOG',
    arrivalStation: 'MED',
    flightCarrier: '',
    flightNumber: '',
    price: 0
  }

  routes: Observable<IRoute[]> = of([this.dataRoutes]);
  flights: Observable<IFlight[]> = of([this.dataFlight]);

  public getFlightsRoutes(category: number = 0): Observable<IRoute[]> {
    return this.routes;
  }

  public getFlights(body: IRoute, category: number = 0): Observable<IFlight[]> {
    return this.flights;
  }
}
