import { TaskStatus } from './../task_status.enum';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({
    description: `Set the title of the task`,
    example: 'Create WebSite',
  })
  title: string;

  @IsOptional()
  @ApiProperty({
    description: `Set the description of the task`,
    example: 'Website for this client',
  })
  description: string;

  @IsNotEmpty()
  creationDate: Date = new Date();

  @IsNotEmpty()
  @ApiProperty()
  startDate: Date;

  @IsNotEmpty()
  @ApiProperty()
  dueDate: Date;

  // @ApiProperty({
  //   description: `Set the status of the task`,
  //   example: 'OPEN',
  // })
  // @IsIn(['OPEN', 'DONE', 'IN_PROGRESS'])
  // status: TaskStatus;
}
