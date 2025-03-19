import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
  import { Document } from 'mongoose';
import { Post } from 'src/posts/schema/post.schema';
import { User } from 'src/users/schemas/user.schema';

export enum ReactionEnum {
    LIKE = 'LIKE',
    UPVOTE = 'UPVOTE'
}

  @Schema()
  export class Reaction extends Document {
    @Prop({
      type: String,
      required: true,
      enum: [ReactionEnum.LIKE, ReactionEnum.UPVOTE]
    })
    type: string;
    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
    @Prop({ type: String, ref: 'User', required: true })
    user: User;
    @Prop({ type: String, ref: 'Post', required: true })
    post: Post;
  }
  export const ReactionSchema =
    SchemaFactory.createForClass(Reaction);
