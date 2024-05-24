import { v4 as uuid } from "uuid";
import { Marca } from "src/marcas/entities/marca.entity";


export const MARCAS_SEED: Marca[] = [
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Audi',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'BMW',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Bugatti',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Cadillac',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Caterham',
        createdAt: new Date().getTime()
    },




    
    

]