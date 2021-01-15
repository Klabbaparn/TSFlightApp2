import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { Flight } from './flight.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  // flights: Flight[] = [{
  //   origin: "Miami", destination: "Chicago", flightnumber: 345,
  //   depart: new Date('2020-02-25T23:18:21.932Z'),
  //   arrive: new Date('2020-02-25T23:21:21.932Z'),
  //   nonstop: true},
  //   {origin: "New York", destination: "Los Angeles", flightnumber: 432,
  //   depart: new Date('2020-02-25T23:18:00.932Z'),
  //   arrive: new Date('2020-02-25T23:23:21.932Z'),
  //   nonstop: false}
  // ];

  constructor(private http: HttpClient) { }

  getAllFlights() : Observable<any> {
    return this.http.get(`http://localhost:3000/flights`);
  }

  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/query/${orig}/${dest}`);
  }

  postFlight(flight: Flight) {
    return this.http.post(`http://localhost:3000/flights`, flight).subscribe(data =>{
    })
  }

  getAllOrigins() : Observable<any> {
    return this.http.get(`http://localhost:3000/flights/cities/origins`);
  }

  getAllDestinations() : Observable<any> {
    return this.http.get(`http://localhost:3000/flights/cities/destinations`);
  }

  deleteFlight(id: number) {
    return this.http.post(`http://localhost:3000/flights/${id}/delete`, null);
  }

  updateFlight(flight: Flight) {
    return this.http.post(`http://localhost:3000/flights/${flight.id}/update`, flight);
  }
}
