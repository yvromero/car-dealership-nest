import { v4 as uuid } from "uuid";
import { Car } from "src/cars/interfaces/car.interface";


export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        marca: 'Toyota',
        modelo: 'Corolla',
    },
    {
        id: uuid(),
        marca: 'Audi',
        modelo: 'A3',
    },
    {
        id: uuid(),
        marca: 'Audi',
        modelo: 'Q2',
    },
    {
        id: uuid(),
        marca: 'BMW',
        modelo: 'Serie 1',
    },
    {
        id: uuid(),
        marca: 'Bugatti',
        modelo: 'Bolide',
    },
    {
        id: uuid(),
        marca: 'Cadillac',
        modelo: 'ATS',
    },
    {
        id: uuid(),
        marca: 'Caterham',
        modelo: 'Seven',
    },
]