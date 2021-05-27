import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-54-243-92-68.compute-1.amazonaws.com',

      port: 5432,
      username: 'klzbshzulbapse',
      password:
        '23450afd0dbbe34a4adcdb5ab680e2989b5824a213ff81e660e509afb46bc151',
      database: 'd6ebfp1vkq804n',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
