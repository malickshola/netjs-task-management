import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '191215',
      database: 'taskmanagement',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
