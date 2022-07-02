import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RequireAtLeast } from '@pipes/RequireAtLeast.pipe';
import { Author } from './authors.schema';
import { AuthorsService } from './authors.service';
import { AuthorInput } from './dto/author.input';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => [Author], {
    name: 'getListAuthors',
    nullable: true,
  })
  async getListAuthors(): Promise<Author[]> {
    return this.authorsService.getListAuthors();
  }

  @Query(() => Author, {
    name: 'getAuthor',
    nullable: true,
  })
  async getAuthor(@Args('authorInput', new RequireAtLeast()) authorInput: AuthorInput) {
    return this.authorsService.getAuthor(authorInput);
  }

  @Mutation(() => Author, {
    name: 'createAuthor',
    nullable: false,
  })
  async createAuthor(@Args('authorInput') authorInput: AuthorInput): Promise<Author> {
    return this.authorsService.createAuthor(authorInput);
  }

  @Mutation(() => String, {
    name: 'deleteAuthor',
    nullable: true,
  })
  async deleteAuthor(
    @Args('deleteAuthorInput', new RequireAtLeast()) authorInput: AuthorInput,
  ): Promise<string> {
    this.authorsService.deleteAuthor(authorInput);
    return 'true';
  }
}
