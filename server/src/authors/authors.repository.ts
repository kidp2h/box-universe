import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from './authors.schema';
import { AuthorInput } from './dto/author.input';

@Injectable()
export class AuthorsRepository {
  constructor(@InjectModel(Author.name) private authorModel: Model<AuthorDocument>) {}

  async createAuthor(authorInput: AuthorInput): Promise<Author> {
    const createdAuthor = new this.authorModel(authorInput);
    return createdAuthor.save();
  }

  async deleteAuthor(authorInput: AuthorInput): Promise<DeleteResult> {
    return this.authorModel.deleteOne(authorInput);
  }
  async getListAuthors(): Promise<Author[]> {
    return this.authorModel.find({});
  }
  async getAuthor(authorInput: AuthorInput | Author): Promise<Author> {
    return this.authorModel.findOne(authorInput);
  }
}
