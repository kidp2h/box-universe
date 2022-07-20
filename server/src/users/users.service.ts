import { User } from './users.schema';
import { UserInput } from './dto/user.input';
import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUser(userInput: UserInput): Promise<User> {
    return this.usersRepository.getUser(userInput);
  }

  createUser(userInput: UserInput): Promise<User> {
    return this.usersRepository.createUser(userInput);
  }
}
