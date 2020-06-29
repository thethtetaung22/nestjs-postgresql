import { Field, ID, Int, InputType } from '@nestjs/graphql'

@InputType()
export class UserInput {
    @Field(type => String)
    readonly name: string
    @Field(type => Int)
    readonly age: number
}