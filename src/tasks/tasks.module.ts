import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task, TaskSchema } from '../schemas/task.schema'
import { TaskLog, TaskLogSchema } from '../schemas/task-log.schema'
import { TaskLogService } from '../task-log/task-log.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    MongooseModule.forFeature([{ name: TaskLog.name, schema: TaskLogSchema }])
  ],
  controllers: [TasksController],
  providers: [TasksService, TaskLogService]
})
export class TasksModule {}
