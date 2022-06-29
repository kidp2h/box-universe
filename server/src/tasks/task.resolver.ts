import { CreateTaskInput } from './dto/input/createTask.input';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetTaskArgs } from './dto/getTaskArgs';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}
  @Query(() => Task, {
    name: 'getTaskById',
    nullable: false,
  })
  async getTaskById(@Args() getTaskArgs: GetTaskArgs) {
    return this.taskService._getTaskById(getTaskArgs);
  }
  @Query(() => [Task], { name: 'tasks' })
  async getTask() {
    return this.taskService.getAllTask();
  }
  @Mutation(() => Task, {
    name: 'createTask',
  })
  async createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return await this.taskService._createTask(createTaskInput);
  }
}
