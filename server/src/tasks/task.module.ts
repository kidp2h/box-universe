import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { TaskResolver } from './task.resolver';
import { Author } from 'src/authors/author.entity';
import { AuthorRepository } from 'src/authors/author.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository, AuthorRepository]), Task, Author],
  controllers: [TaskController],
  providers: [TaskService, TaskResolver],
})
export class TaskModule {}
