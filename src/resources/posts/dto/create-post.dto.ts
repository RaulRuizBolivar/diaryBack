import { User } from 'src/resources/users/schema/users.schema';

export class CreatePostDto {
  title: string;
  content: string;
  createdAt: Date;
  createdBy: User;
  userId: string;
}
