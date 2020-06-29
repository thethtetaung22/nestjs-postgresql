import { Field, ObjectType, ID, Int } from '@nestjs/graphql'

@ObjectType()
export class UserType {
    @Field(type => ID)
    readonly id: string
    @Field(type => String)
    readonly name: string
    @Field(type => Int)
    readonly age: number
}
