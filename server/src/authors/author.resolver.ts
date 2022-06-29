import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author } from './author.entity';
import { AuthorService } from './author.service';
import { GetAuthorArgs } from './dto/getAuthorArgs';
import { CreateAuthorInput } from './dto/input/createAuthor.input';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => Author, {
    name: 'getAuthorById',
    nullable: false,
  })
  getAuthorById(@Args() getAuthorArgs: GetAuthorArgs): Promise<Author> {
    return this.authorService.getAuthorById(getAuthorArgs);
  }

  @Query(() => Author, {
    name: 'getAuthorByName',
    nullable: false,
  })
  getAuthorByName(@Args() getAuthorArgs: GetAuthorArgs): Promise<Author> {
    return this.authorService.getAuthorByName(getAuthorArgs);
  }

  @Query(() => [Author], { name: 'authors' })
  getAuthors() {
    return this.authorService.getAuthors();
  }
  @Mutation(() => Author, {
    name: 'createAuthor',
    nullable: false,
  })
  async createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorService.createAuthor(createAuthorInput);
  }
}
