import { MinLength, IsString } from "class-validator";

export class CreateMarcaDto {

    @IsString()
    @MinLength(1)
    name: string;
}
