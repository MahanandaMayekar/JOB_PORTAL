import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type JobsDocument = Job & Document

@Schema({ timestamps: true })
export class Job {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    company: string;

    @Prop({ required: true })
    location: string;


    @Prop({ required: true })
    salary_from: number;

    @Prop({ required: true })
    salary_to: number;

    @Prop({ required: true })
    employment_type: string;

    @Prop({ required: true ,type:Date})
    application_deadline: Date;

    @Prop({ type: [String], default: [] })
    qualifications: string[];


    @Prop({ required: true })
    contact: string;


    @Prop({ required: true })
    job_category: string;

    @Prop({ required: true, default: 0 })
    is_remote_work:number; // consider using boolean

    @Prop({ required: true, default: 1 })
    number_of_opening: number;


    @Prop({ required: true })
    category: string;

}

export const JobsSchema = SchemaFactory.createForClass(Job)