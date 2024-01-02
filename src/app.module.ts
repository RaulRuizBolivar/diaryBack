import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './resources/users/users.module';
import { PostsModule } from './resources/posts/posts.module';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/diary'),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
