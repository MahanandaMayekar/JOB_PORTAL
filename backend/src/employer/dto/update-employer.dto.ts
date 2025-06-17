import { CreateEmployerDto } from "./create-employer.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateEmployerDto extends PartialType(CreateEmployerDto){}