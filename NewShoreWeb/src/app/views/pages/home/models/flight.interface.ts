import { IRoute } from './route.interface';

export interface IFlight extends IRoute{
    flightCarrier: string;
    flightNumber : string;
    price: number;
}