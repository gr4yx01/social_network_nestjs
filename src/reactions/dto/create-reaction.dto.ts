import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReactionDto {
  @Field()
  type: string;
  @Field()
  userId: string;
  @Field()
  postId: string;
}