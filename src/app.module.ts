import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TaskLogModule } from './task-log/task-log.module';

@Module({
  imports: [
    TasksModule,
    TaskLogModule,
    MongooseModule.forRoot('mongodb://admin:123456@localhost:27017/todolist', {})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
