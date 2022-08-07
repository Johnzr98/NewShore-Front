import { Observable, of } from 'rxjs';
import { IRoute } from '../models/route.interface';
import { IJourney, IJourneyFlight } from '../models/journey.interface';

export class MockHomeService {

  dataRoutes: IRoute = {
    departureStation: 'BOG',
    arrivalStation: 'MED',
  }
  
  dataJourney: IJourney = {
    origin: 'BOG',
    destination: 'MED',
    price: 100,
    flights: [
      {
        origin: 'BOG',
        destination: 'MED',
        price: 100,
        transport: {
          flightCarrier: '',
          flightNumber: ''
        }
      }
    ]
  };

  routes: Observable<IRoute[]> = of([this.dataRoutes]);
  journey: Observable<IJourney> = of(this.dataJourney);

  public getFlightsRoutes(category: number = 0): Observable<IRoute[]> {
    return this.routes;
  }

  public getJourney(body: IRoute, category: number = 0): Observable<IJourney> {
    return this.journey;
  }
}
