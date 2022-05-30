import { TasksRepository } from './task.repository';
import { CreateTaskDto } from './dto/createTask.dto';
import { TaskStatus } from './types/TaskStatus.enum';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { FilterTaskDto } from './dto/filterTask.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(TasksRepository) private tasksRepository: TasksRepository) {}

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!found) throw new NotFoundException(`Task with ID ${id} not found`);
    return found;
  }
}
