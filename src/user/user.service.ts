import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserInput } from './input/user.input';
import { v4 as uuid } from 'uuid';
@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

    async createUser(data: UserInput): Promise<UserEntity> {
        var user = new UserEntity()
        user.id = uuid();
        user.name = data.name
        user.age = data.age

        const createdUser = await this.userRepository.save(user)
        console.log(createdUser);
        return user;
    }

    async getAllUsers() {
        var users = await this.userRepository.find();
        if (users.length > 0) {
            users = users.map(user => {
                return { id: user.id, name: user.name, age: user.age }
            });
        }
        return users;
    }
}
