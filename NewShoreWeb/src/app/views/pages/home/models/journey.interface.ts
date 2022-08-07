export interface IJourney {
    origin:      string;
    destination: string;
    price:       number;
    flights:    IJourneyFlight[];
}

export interface IJourneyFlight {
    origin: string;
    destination:  string;
    price:       number;
    transport:  IJourneyTransport;
}
export interface IJourneyTransport {
    flightCarrier: string;
    flightNumber:  string;
}
