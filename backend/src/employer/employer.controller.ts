import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { CreateEmployerDto } from './dto/create-employer.dto';



@Controller('employer')
export class EmployerController {
constructor(private employerService:EmployerService){}
@Post()
    async CreateEmployer(@Body(ValidationPipe) body: CreateEmployerDto) {
        return this.employerService.CreateEmployer(body)
        
    }
}
