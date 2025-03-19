import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Post } from "src/posts/schema/post.schema";
import { User } from "src/users/schemas/user.schema";

@Schema()
export class Comment extends Document {
  @Prop({ type: String, required: true })
  content: string;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;
  @Prop({ type: String, ref: 'User', required: true })
  author: User;
  @Prop({ type: String, ref: 'Post', required: true })
  post: Post;
}
export const CommentSchema =
  SchemaFactory.createForClass(Comment);