import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskLogService } from './task-log.service';
import { TaskLogController } from './task-log.controller';
import { TaskLog, TaskLogSchema } from '../schemas/task-log.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TaskLog.name, schema: TaskLogSchema }])
  ],
  controllers: [TaskLogController],
  providers: [TaskLogService],
  exports: [TaskLogService]
})
export class TaskLogModule {}
