import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/createTask.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { ObjectId } from 'mongodb';
import { DeleteResult } from 'typeorm';
import { GetTaskFilterDto } from './dto/getFilterTask.dto';
import { GetTaskArgs } from './dto/getTaskArgs';
import { CreateTaskInput } from './dto/input/createTask.input';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(TaskRepository) public taskRepository: TaskRepository) {}

  async getAllTask(): Promise<Task[]> {
    return this.taskRepository.getAllTask();
  }
  async getTask(getTaskFilterDto: GetTaskFilterDto): Promise<Task[]> {
    return this.taskRepository.getTask(getTaskFilterDto);
  }
  async getTaskById(id: ObjectId): Promise<Task> {
    return this.taskRepository.getTaskById(id);
  }
  async _getTaskById(getTaskArgs: GetTaskArgs): Promise<Task> {
    const { _id } = getTaskArgs;

    return this.taskRepository.getTaskById(new ObjectId(_id));
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }
  async _createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { title, description } = createTaskInput;
    return this.taskRepository._createTask({ title, description });
  }

  async deleteTaskById(id): Promise<DeleteResult> {
    return this.taskRepository.deleteTaskById(id);
  }
}
