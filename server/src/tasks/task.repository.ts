import { NotFoundException } from '@nestjs/common';
import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/createTask.dto';
import { TaskStatus } from './types/TaskStatus.enum';
import { ObjectId } from 'mongodb';
import { GetTaskFilterDto } from './dto/getFilterTask.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTask(getTaskFilterDto: GetTaskFilterDto): Promise<Task[]> {
    const { status, search } = getTaskFilterDto;
    let tasks: Task[];
    if (status)
      tasks = await this.find({
        where: {
          status: status,
        },
      });
    if (search)
      tasks = tasks.filter(
        (task) => task.description.includes(search) || task.title.includes(search),
      );
    return tasks;
  }
  async getAllTask(): Promise<Task[]> {
    return await this.find({});
  }

  public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }
  public async _createTask({ title, description }): Promise<Task> {
    const task = this.create({
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }
  async getTaskById(id: ObjectId): Promise<Task> {
    const found = await this.findOne({
      _id: id,
    });
    if (!found) throw new NotFoundException(`Task with ID ${id} not found`);
    return found;
  }

  async deleteTaskById(id): Promise<DeleteResult> {
    const user = new Task();
    user._id = id;
    return await this.delete(id);
  }
}
