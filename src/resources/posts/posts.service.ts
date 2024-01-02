import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PostDocument } from './schema/posts.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('posts') private postsModule: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto) {
    return await this.postsModule.create(createPostDto);
  }

  async findAll() {
    return await this.postsModule.find();
  }

  async findOne(id: number) {
    return await this.postsModule.findById(id);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.postsModule.findByIdAndUpdate(id, updatePostDto);
  }

  async remove(id: number) {
    return await this.postsModule.findByIdAndDelete(id);
  }
}
