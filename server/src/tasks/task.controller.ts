import { TaskDecorator } from './task.decorator';
import { CreateTaskDto } from './dto/createTask.dto';
import { TaskService } from './task.service';
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ObjectIdPipe } from '@pipes/ObjectId.pipe';
import { Task } from './task.entity';
import { ObjectId } from 'mongodb';
import { DeleteResult } from 'typeorm';
import { GetTaskFilterDto } from './dto/getFilterTask.dto';

@Controller('tasks')
export class TaskController {
  constructor(private tasksService: TaskService) {}

  @Get('/kec')
  getAllTask(@TaskDecorator('kec') kec): string {
    console.log(kec);
    return 'done';
  }

  @Get('')
  async getTask(@Query() getTaskFilterDto: GetTaskFilterDto): Promise<Task[]> {
    return this.tasksService.getTask(getTaskFilterDto);
  }

  @Get('/:id')
  async getTaskById(@Param('id', ObjectIdPipe) id: ObjectId): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  async deleteTask(@Param('id', ObjectIdPipe) id: ObjectId): Promise<DeleteResult> {
    return this.tasksService.deleteTaskById(id);
  }
}
