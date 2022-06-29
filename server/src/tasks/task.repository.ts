import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/createTask.dto';
import { TaskStatus } from './types/TaskStatus.enum';
import { ObjectId } from 'mongodb';
import { GetTaskFilterDto } from './dto/getFilterTask.dto';
import { Author } from 'src/authors/author.entity';
import { CreateTaskInput } from './dto/input/createTask.input';

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
    return this.find({});
  }

  public async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, author, description } = createTaskDto;
    const task = this.create({
      title: title,
      author: author,
      description: description,
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }
  public async _createTask(createTaskInput: CreateTaskInput, author: Author): Promise<Task> {
    const task = this.create({
      title: createTaskInput.title,
      author,
      description: createTaskInput.description,
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }
  getTaskById(id: ObjectId): Promise<Task> {
    return this.findOne({
      _id: id,
    });
  }

  deleteTaskById(id): Promise<DeleteResult> {
    const user = new Task();
    user._id = id;
    return this.delete(id);
  }
}
