import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskLogDto } from './dto/create-task-log.dto';
import { DeleteTaskLogDto } from './dto/delete-task-log.dto';
import { TaskLog, TaskLogDocument } from '../schemas/task-log.schema';

@Injectable()
export class TaskLogService {
  constructor(@InjectModel(TaskLog.name) private taskLogModel: Model<TaskLogDocument>) {}

  async create(createTaskLogDto: CreateTaskLogDto): Promise<TaskLog> {
    const createTaskLog = new this.taskLogModel(createTaskLogDto);
    return createTaskLog.save();
  }

  findAll() {
    return this.taskLogModel.find().exec();
  }

  remove(deleteTaskLogDto: DeleteTaskLogDto) {
    return this.taskLogModel.deleteMany({_id: {$in: deleteTaskLogDto.selectedIds}}).exec();
  }
}
