import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Job } from './schrma/jobs.schema';
import { InjectModel } from '@nestjs/mongoose';
import type { JobsDocument } from './schrma/jobs.schema';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobsModule } from './jobs.module';

@Injectable()
export class JobsService {

    constructor(@InjectModel(Job.name) private jobModel: Model<JobsDocument>) { }

    async CreateJob(JobData: CreateJobDto) {
        const job = await this.jobModel.create(JobData)
        return job

    }
    

    async findAllJobs(category?: string) {

        if (category) {
            const jobs = await this.jobModel.find({ category: category }).exec()
            return jobs
            
        }
        else {
            const jobs = await this.jobModel.find().exec()
            return jobs
            
        }
        
        
    }

    async UpdateJob(id: string, UpdateJobData: UpdateJobDto) {
        if (!id) {
            throw new NotFoundException("id not found")
        }
        const updatedJob = await this.jobModel.findByIdAndUpdate(id, UpdateJobData, { new: true })
        return updatedJob
    }
    async FindAllEmployersJobPosts(EmployerId: string) {
        if (!EmployerId) {
            throw new NotFoundException("EmployerId not found")
        }
        const jobs = await this.jobModel.find({ employerId: EmployerId });
        console.log("jobs", JobsModule)
        return jobs
    }
   

    async FindJobById(id: string) {
        if (!id) {
            throw new NotFoundException("id not found")
        }

        const job = await this.jobModel.findById(id).exec()
        return job
        
    }

  

}
