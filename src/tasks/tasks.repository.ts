import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task_status.enum';
import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);

    return task;
  }

  //   async getTasks(): Promise<Task[]> {
  //     const query = this.createQueryBuilder('task');
  //     const tasks = await query.getMany();

  //     return tasks;
  //   }
}
