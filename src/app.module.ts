import { Module } from '@nestjs/common';
import { UsersModule } from './resources/users/users.module';
import { PostsModule } from './resources/posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.DB_URI + process.env.PASSWORD + process.env.CLUSTER,
    ),
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}
