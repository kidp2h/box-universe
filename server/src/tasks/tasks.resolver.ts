import { Inject, Injectable } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RequireAtLeast } from '@pipes/RequireAtLeast.pipe';
import { TaskInput } from './dto/task.input';
import { Task } from './tasks.schema';
import { TasksService } from './tasks.service';

@Resolver(() => Task)
@Injectable()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => Task, {
    name: 'getTask',
    nullable: true,
  })
  async getTask(@Args('taskInput', new RequireAtLeast()) taskInput: TaskInput): Promise<Task> {
    return this.tasksService.getTask(taskInput);
  }

  @Query(() => [Task], {
    name: 'getListTasks',
    nullable: true,
  })
  async getListTasks(): Promise<Task[]> {
    return this.tasksService.getListTasks();
  }

  @Mutation(() => Task, {
    name: 'createTask',
  })
  async createTask(@Args('taskInput') taskInput: TaskInput) {
    return this.tasksService.createTask(taskInput);
  }

  @Mutation(() => String, {
    name: 'deleteTask',
    nullable: true,
  })
  async deleteTask(@Args('taskInput', new RequireAtLeast()) taskInput: TaskInput) {
    this.tasksService.deleteTask(taskInput);
    return 'true';
  }

  // @ResolveField('author', () => Author)
  // async getAuthor(@Parent() author: AuthorInput) {
  //   return this.authorsService.getAuthor(author);
  // }
}
