import { CreateUserDto } from "./create-uset.dto";
import { PartialType } from "@nestjs/mapped-types";

export class  UpdateUserDto extends PartialType(CreateUserDto){}