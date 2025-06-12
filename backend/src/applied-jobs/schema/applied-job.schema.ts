import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AppliedJobDocument = AppliedJobs & Document


@Schema()
export class AppliedJobs{
    @Prop({required:true})
    jobId: string;

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    contact: string;


    @Prop({ required: true })
    coverLetterFile: string;


}


export const AppliedJobsSchema=SchemaFactory.createForClass(AppliedJobs)