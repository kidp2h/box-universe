import { CreateTaskDto } from './dto/createTask.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { FilterTaskDto } from './dto/filterTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
}
