import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Job } from './schrma/jobs.schema';
import { JobsSchema } from './schrma/jobs.schema';
import { Employer,EmployerSchema } from 'src/employer/schema/employer.schema';
@Module({
  imports: [MongooseModule.forFeature([
    { name: Job.name, schema: JobsSchema },
    {name:Employer.name,schema:EmployerSchema}
  ])],
  providers: [JobsService],
  controllers: [JobsController]
})
export class JobsModule {}
