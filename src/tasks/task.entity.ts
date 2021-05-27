import { TaskStatus } from './task_status.enum';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: String;
  @Column()
  title: String;
  @Column()
  description: String;

  @Column()
  status: TaskStatus;
}
