import { Module } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { EmployerController } from './employer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employer, EmployerSchema } from './schema/employer.schema';
import { Job, JobsSchema } from 'src/jobs/schrma/jobs.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Employer.name, schema: EmployerSchema },
    { name: Job.name, schema: JobsSchema }
  ])],
  providers: [EmployerService],
  controllers: [EmployerController],
  exports:[EmployerService]
})
export class EmployerModule { }
