import { TaskStatus } from './../task_status.enum';
import { IsIn, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty({
    description: `Set the status of the task`,
    example: 'DONE',
  })
  @IsIn(['OPEN', 'DONE', 'IN_PROGRESS'])
  status: TaskStatus;
  @ApiProperty()
  startDate: Date;
  @ApiProperty()
  dueDate: Date;
}
