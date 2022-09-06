import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskLogService } from './task-log.service';
import { DeleteTaskLogDto } from './dto/delete-task-log.dto';

@Controller('task-log')
export class TaskLogController {
  constructor(private readonly taskLogService: TaskLogService) {}

  @Get()
  findAll() {
    return this.taskLogService.findAll();
  }

  @Delete()
  remove(@Body() deleteTaskLogDto: DeleteTaskLogDto) {
    return this.taskLogService.remove(deleteTaskLogDto);
  }
}
