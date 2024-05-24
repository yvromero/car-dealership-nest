import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { MarcasService } from 'src/marcas/marcas.service';
import { CARS_SEED } from './data/marca.seed';
import { MARCAS_SEED } from './data/car.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly marcaService: MarcasService
  ) {}

  populateDB() {

    this.carsService.fillCarsWithSeedData( CARS_SEED );
    this.marcaService.fillMarcasWithSeedData( MARCAS_SEED );

    return 'SEED executed';
  }
}
