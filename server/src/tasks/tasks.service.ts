import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'mongodb';
import { TaskInput } from './dto/task.input';
import { TasksRepository } from './tasks.repository';
import { Task } from './tasks.schema';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async createTask(taskInput: TaskInput): Promise<Task> {
    return this.tasksRepository.createTask(taskInput);
  }

  async getTask(taskInput: TaskInput): Promise<Task> {
    return this.tasksRepository.getTask(taskInput);
  }

  async getListTasks(): Promise<Task[]> {
    return this.tasksRepository.getListTasks();
  }

  async deleteTask(taskInput: TaskInput): Promise<DeleteResult> {
    return this.tasksRepository.deleteTask(taskInput);
  }
}
