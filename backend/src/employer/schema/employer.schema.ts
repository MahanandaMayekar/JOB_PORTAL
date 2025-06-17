import { Document, Types } from "mongoose";
import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";



export type EmployerDocument=Document&Employer


@Schema({timestamps:true})
export class Employer{

    @Prop({ required: true })
        fullName:string

    @Prop({required:true,unique:true})
    email: string
    
    @Prop({ required: true })
    password:string
    
    @Prop({ type: [{ type: Types.ObjectId, ref: "Job" }], default: [] })
    jobPosts: Types.ObjectId[]
    
    @Prop({ required: true ,default:"employer"})
    role:string
   

}

export const EmployerSchema=SchemaFactory.createForClass(Employer)