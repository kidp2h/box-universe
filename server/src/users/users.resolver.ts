import { UserInput } from './dto/user.input';
import { RequireAtLeast } from '@pipes/RequireAtLeast.pipe';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './users.schema';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, {
    name: 'getUser',
    nullable: true,
  })
  async getUser(@Args('userInput', new RequireAtLeast()) userInput: UserInput): Promise<User> {
    return this.usersService.getUser(userInput);
  }

  @Mutation(() => User, {
    name: 'createUser',
    nullable: false,
  })
  async createUser(@Args('userInput', new RequireAtLeast()) userInput: UserInput): Promise<User> {
    return this.usersService.createUser(userInput);
  }
}
