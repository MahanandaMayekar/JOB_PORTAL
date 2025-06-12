import { Module } from '@nestjs/common';
import { AppliedJobsController } from './applied-jobs.controller';
import { AppliedJobsService } from './applied-jobs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppliedJobs } from './schema/applied-job.schema';
import { AppliedJobsSchema } from './schema/applied-job.schema';
@Module({
  imports:[MongooseModule.forFeature([{name:AppliedJobs.name,schema:AppliedJobsSchema}])],
  controllers: [AppliedJobsController],
  providers: [AppliedJobsService]
})
export class AppliedJobsModule {}
