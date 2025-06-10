import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Experience } from "./experience.schema";
import { userRole } from "../enums/user-role.enum";

export type UserDocument=User&Document


@Schema({timestamps:true})
export class User{
    @Prop({required:true})
    fullName: string;

    @Prop({ required: true,unique:true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true ,enum:userRole,default:userRole.CANDIDATE})
    role: string;

    @Prop({ required: true,default:true })
    isFirstLogin: boolean;

    @Prop({ type:[String],default:[]})
    interestedCategories: string[];


    @Prop({ type:Array,default:[]})
    savedPosts?: any[];

    @Prop({ type: Array, default: [] })
    appliedPosts?: any[];

    @Prop()
    DOB?: string;

    @Prop()
    address?: string;

    @Prop()
    country?: string;

    @Prop()
    code?: string;

    @Prop()
    contact?: string;

    @Prop()
    occupation?: string;

    @Prop()
    introduction?: string;
    
    @Prop({ type:[String],default:[] })
    skills?: string[];

    @Prop({ type:[Experience],default:[] })
    experience?: Experience[]
}


export const UserSchema=SchemaFactory.createForClass(User)