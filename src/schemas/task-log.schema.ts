import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Task } from './task.schema';

export type TaskLogDocument = TaskLog & Document;

@Schema({ timestamps: true })
export class TaskLog {
  @Prop({required: true})
  name: string;

  @Prop()
  task: mongoose.Schema.Types.Mixed
}

export const TaskLogSchema = SchemaFactory.createForClass(TaskLog);
