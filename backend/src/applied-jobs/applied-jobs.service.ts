import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApplicationStatus, AppliedJobs } from './schema/applied-job.schema';
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
            .sort({ createAt: -1 })
            .populate('jobId')
            .populate('userId', 'email fullName');

        console.log("employer's all applications", result);

        return result;
    }
    async getApplicationsForJob(jobId: string) {
        if (!jobId) {
            throw new NotFoundException("jobId not found");
        }
        const result = await this.appliedJobsModel.find({ jobId })
            .populate('userId','fullName ') // populate user name & email
            .populate('jobId')       // optional: job title
            .exec();
        return result

    }

    async updateStatus(id: string, newStatus: ApplicationStatus) {
        if (!id) {
            throw new NotFoundException("id not found");
        }  
        const results = await this.appliedJobsModel.findByIdAndUpdate(id, { status: newStatus }, { new: true }).exec()
        
        return results
    }

    async fetchUsersApplications(userId: string) {
        if (!userId) {
            throw new NotFoundException('User ID is required');
        }

        const applications = await this.appliedJobsModel
            .find({ userId })
            .populate('jobId');

        return applications;
      }

    

}
