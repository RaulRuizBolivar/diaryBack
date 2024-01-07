import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private userModule: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userModule.create(createUserDto);
  }

  async findAll() {
    return await this.userModule.find();
  }

  async findOne(id: string) {
    return await this.userModule.findById(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userModule.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userModule.findByIdAndDelete(id);
  }
}
