import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './tasks.schema';
import { TasksRepository } from './tasks.repository';
import { TasksResolver } from './tasks.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
  providers: [TasksService, TasksRepository, TasksResolver],
})
export class TasksModule {}
