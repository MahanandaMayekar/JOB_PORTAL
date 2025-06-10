import { Prop } from "@nestjs/mongoose";

export class Experience{
    @Prop({ required: true })
    company: string;
    @Prop({ required: true })
    roleAtCompany: string;
    @Prop({ required: true })
    location: string;
    @Prop({ required: true })
    startDate: string;
    @Prop({ required: true })
    endDate: string;
    @Prop({ required: true })
    description: string;
}
