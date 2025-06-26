import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppliedJobs } from './schema/applied-job.schema';
import { Model } from 'mongoose';
import { AppliedJobDocument } from './schema/applied-job.schema';
import { AppliedJobsDto } from './dto/applied-job-dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class AppliedJobsService {
    constructor(@InjectModel(AppliedJobs.name) private appliedJobsModel: Model<AppliedJobDocument>) { }
    
    async CreateApplication(applicationData: AppliedJobsDto) {
        const result = await this.appliedJobsModel.create(applicationData)
        return result
        
    }
    async fetchEmployersApplications(employerId: string) {
        if (!employerId) {
            throw new NotFoundException("employerId not found");
        }

        const result = await this.appliedJobsModel
            .find({ employerId })
            .sort({createAt:-1})
            .populate('jobId') 
            .populate('userId', 'email fullName'); 

        console.log("employer's all applications", result);

        return result;
      }

}
