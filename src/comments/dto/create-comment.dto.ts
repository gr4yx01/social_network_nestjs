import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCommentDto {
    @Field()
    content: string
    
    @Field()
    authorId: string

    @Field()
    postId: string
}