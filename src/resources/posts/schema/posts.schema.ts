import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/resources/users/schema/users.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  content: string;

  @Prop({
    required: false,
    unique: false,
  })
  createdAt: Date;

  @Prop({
    required: false,
    unique: false,
  })
  createdBy: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
