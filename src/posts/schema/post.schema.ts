import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { User } from "src/users/schemas/user.schema";

@Schema()
export class Post extends Document {
    @Prop({ type: String, required: true })
    content: string

    @Prop({ type: Date, default: Date.now })
    createdAt: Date

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date

    @Prop({ type: Boolean, default: false })
    isDeleted: boolean
    
    @Prop({ type: String, ref: 'User', required: true })
    author: User
}

export const PostSchema = SchemaFactory.createForClass(Post)

