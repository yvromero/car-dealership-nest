// import { PartialType } from '@nestjs/mapped-types';
// import { CreateMarcaDto } from './create-marca.dto';

import { IsString, MinLength } from "class-validator";

// export class UpdateMarcaDto extends PartialType(CreateMarcaDto) {}

export class UpdateMarcaDto {

    @IsString()
    @MinLength(1)
    name: string;
}