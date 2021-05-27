import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'batyr.db.elephantsql.com',
      port: 5432,
      username: 'jjyxrbzc',
      password: 'CbhVe8HSWRUVUrcQ2WjRSfNvsbgKIb9i',
      database: 'jjyxrbzc',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
