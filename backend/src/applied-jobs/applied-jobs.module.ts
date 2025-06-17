import { Module } from '@nestjs/common';
import { AppliedJobsController } from './applied-jobs.controller';
import { AppliedJobsService } from './applied-jobs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppliedJobs } from './schema/applied-job.schema';
import { AppliedJobsSchema } from './schema/applied-job.schema';
import { Employer, EmployerSchema } from 'src/employer/schema/employer.schema';
import { Job, JobsSchema } from 'src/jobs/schrma/jobs.schema';
import { User,UserSchema } from 'src/users/schema/user.schema';
@Module({
  imports: [MongooseModule.forFeature([
    { name: AppliedJobs.name, schema: AppliedJobsSchema },
    { name: Employer.name, schema: EmployerSchema },
    { name: User.name, schema: UserSchema },
    { name: Job.name, schema: JobsSchema }
  ])],
  controllers: [AppliedJobsController],
  providers: [AppliedJobsService]
})
export class AppliedJobsModule {}
