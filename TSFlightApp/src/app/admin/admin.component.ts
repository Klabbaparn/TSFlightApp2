import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flight.model';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private flightService: FlightsService) { }

  origin: string;
  destination: string;
  flightnumber: number;
  depart: Date;
  arrive: Date;
  nonstop: boolean = false;
  flightList: any;

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.flightService.getAllFlights().subscribe(data =>{
      this.flightList = data;
    })
  }

  toggleNonStop() {
    this.nonstop = !this.nonstop;
  }

  sendFlight(){
    const flight: Flight = {
      origin: this.origin,
      destination: this.destination,
      flightnumber: this.flightnumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    this.flightService.postFlight(flight);
    this.refresh();
  }

  update(flight: Flight) {
    this.flightService.updateFlight(flight).subscribe(data =>{
      if(data && data['affected']){
        this.refresh();
      }
    })
  }

  delete(flight: Flight) {
    if (window.confirm('Are you sure you want to delete this flight?')) {
      this.flightService.deleteFlight(flight.id).subscribe(data =>{
        if (data && data['affected']) {
          this.refresh();
        }
      })
    }
  }
}
