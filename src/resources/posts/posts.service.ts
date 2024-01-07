import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PostDocument } from './schema/posts.schema';
import { Model } from 'mongoose';
import { UserDocument } from '../users/schema/users.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('posts') private postsModule: Model<PostDocument>,
    @InjectModel('users') private usersModule: Model<UserDocument>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    if (!createPostDto.userId) return;
    createPostDto.createdAt = new Date(Date.now());
    createPostDto.createdBy = await this.usersModule.findById(
      createPostDto.userId,
    );
    console.log({ createPostDto }); // TODO delete
    return await this.postsModule.create(createPostDto);
  }

  async findAll() {
    return await this.postsModule.find();
  }

  async findOne(id: string) {
    console.log({ where: 'postService', id }); // TODO delete
    return await this.postsModule.findById(id);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.postsModule.findByIdAndUpdate(id, updatePostDto);
  }

  async remove(id: number) {
    return await this.postsModule.findByIdAndDelete(id);
  }
}
