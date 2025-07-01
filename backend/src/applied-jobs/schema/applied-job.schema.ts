import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Types } from "mongoose";
export type AppliedJobDocument = AppliedJobs & Document
export enum ApplicationStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
}

@Schema()
export class AppliedJobs{
    @Prop({ type: Types.ObjectId, ref: 'Job', required: true })
    jobId: Types.ObjectId

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId

    @Prop({ required: true })
    email: string;

    @Prop({ type: Types.ObjectId, ref: 'Employer', required: true })
    employerId: Types.ObjectId;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    contact: string;


    @Prop({ required: true })
    coverLetterFile: string;
    
    @Prop({ type: String, enum: ApplicationStatus ,default:ApplicationStatus.PENDING})
        status: ApplicationStatus


}


export const AppliedJobsSchema=SchemaFactory.createForClass(AppliedJobs)