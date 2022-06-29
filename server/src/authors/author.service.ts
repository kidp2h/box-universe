import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { Author } from './author.entity';
import { AuthorRepository } from './author.repository';
import { GetAuthorArgs } from './dto/getAuthorArgs';
import { CreateAuthorInput } from './dto/input/createAuthor.input';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(AuthorRepository) public authorRepository: AuthorRepository) {}
  getAuthorById(getAuthorArgs: GetAuthorArgs): Promise<Author> {
    const { _id } = getAuthorArgs;
    return this.authorRepository.getAuthorById(new ObjectId(_id));
  }
  createAuthor(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const { name } = createAuthorInput;
    return this.authorRepository.createAuthor(name);
  }
  getAuthors(): Promise<Author[]> {
    return this.authorRepository.getAuthors();
  }
  getAuthorByName(getAuthorArgs: GetAuthorArgs): Promise<Author> {
    const { name } = getAuthorArgs;
    return this.authorRepository.getAuthorByName(name);
  }
}
