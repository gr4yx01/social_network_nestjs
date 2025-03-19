import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

    async findAll(): Promise<User[]> {
        return this.UserModel.find().exec()
    }

    async create(createUserDto: CreateUserDto): Promise<User>{
        const user = await this.UserModel.create(createUserDto)

        return user.save()
    }
}
