import { Controller, Get, Post, Param, Body, Put, Delete, Patch } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightService: FlightsService) {}

  @Get()
  findAll(): Promise<Flights[]> {
    console.log("backend controller");
    return this.flightService.findAll();
  }

  @Get("query/:orig/:dest")
  async query(@Param('orig') orig, @Param('dest') dest): Promise<any> {
    return this.flightService.query(orig, dest);
  }

  @Post()
  async create(@Body() flight: Flight): Promise<Flights[]> {
    return this.flightService.create(flight);
  }

  @Get("/:id")
  findOne(@Param() param): Promise<Flights[]> {
    return this.flightService.findOne(param.id);
  }

  @Post(":id/update")
  async update(@Param('id') id, @Body() flight: Flight): Promise<any> {
    flight.id = Number(id);
    return this.flightService.update(flight);
  }

  @Post(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.flightService.delete(id);
  }

  @Get("cities/origins")
  async getOrigins() : Promise<String[]> {
    return this.flightService.getFlightOrigins();
  }

  @Get("cities/destinations")
  async getFlightDestinations() : Promise<String[]> {
    return this.flightService.getFlightDestinations();
  }
}