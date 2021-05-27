import { TaskStatus } from './../task_status.enum';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: String;
  @IsNotEmpty()
  description: String;
  status: TaskStatus;
}
