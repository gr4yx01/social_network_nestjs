import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePostDto {
    @Field()
    content: string

    @Field()
    authorId: string
}