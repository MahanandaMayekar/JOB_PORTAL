import { Body, Controller, Param, Patch,Get, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Post } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';


@Controller('jobs')
export class JobsController {

    constructor(private jobservice: JobsService) { }
    
    
    @Post()
    async CreateJob(@Body(ValidationPipe) Jobsbody: CreateJobDto) {
        const result = await this.jobservice.CreateJob(Jobsbody)
        return result
        
    }

    @Get()
    async findAllJobs(@Query("category") category?: string) {

        const result = await this.jobservice.findAllJobs(category)
        return result
        
    }
   




    @Patch(":id")
    async UpdateJob(@Param("id") id: string, @Body(ValidationPipe) updateJobDta: UpdateJobDto ) {
        const result = await this.jobservice.UpdateJob(id, updateJobDta) 
        return result
    }

   


    @Get(":id")
    async getUserById(@Param("id") id: string) {
        return this.jobservice.FindJobById(id)

    }

}
