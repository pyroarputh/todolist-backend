import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from '../schemas/task.schema'
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskLogService } from '../task-log/task-log.service';
//import { TaskLog, TaskLogDocument } from 'src/schemas/task-log.schema';

@Injectable()
export class TasksService {
  @Inject(TaskLogService) private taskLogService: TaskLogService;

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}
  
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    const task = await createdTask.save();

    this.taskLogService.create({
      name: "add" ,
      task: task
    });

    return task;
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(_id: string): Promise<Task> {
    //return `This action returns a #${id} task`;
    return this.taskModel.findById(_id).exec();
  }

  update(_id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${_id} task`;
  }

  async remove(_id: string): Promise<boolean>{
    const findTask = await this.taskModel.findById(_id).exec();
    const removedTask = await this.taskModel.deleteOne({ _id: _id }).exec();
    this.taskLogService.create({
      name: "delete" ,
      task: findTask
    });

    return removedTask.acknowledged;
  }
}
