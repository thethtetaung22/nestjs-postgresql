import { Resolver, Mutation, Args, Query} from '@nestjs/graphql';
import { UserType } from './dto/user.dto';
import { UserService } from './user.service';
import { UserInput } from './input/user.input';

@Resolver('User')
export class UserResolver {

    constructor(private readonly userService: UserService) { }

    @Mutation(() => UserType, { nullable: true })
    async createNewUser(@Args('input') input: UserInput) {
        const res = await this.userService.createUser(input);
        if (res && res !== null) {
            return res;
        }
        return null;
    }

    @Query(() => [UserType])
    async getAllUsers() {
        const res = await this.userService.getAllUsers();
        console.log(res);
        return res;
    }
}
