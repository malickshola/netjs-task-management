import { TaskStatus } from './../task_status.enum';
import { IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  title: String;
  description: String;
  status: TaskStatus;
}
