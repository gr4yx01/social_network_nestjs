import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserDto {
    @Field()
    username: string

    @Field()
    email: string

    @Field()
    password: string

    @Field({ nullable: true })
    bio: string
}