import { ObjectId } from 'mongodb';
import { EntityRepository, Repository } from 'typeorm';
import { Author } from './author.entity';

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {
  getAuthors(): Promise<Author[]> {
    return this.find({});
  }
  getAuthorById(_id: ObjectId): Promise<Author> {
    return this.findOne({
      _id,
    });
  }
  getAuthorByName(name: string): Promise<Author> {
    return this.findOne({
      name,
    });
  }
  async createAuthor(name: string): Promise<Author> {
    const task = this.create({
      name: name,
    });
    await this.save(task);
    return task;
  }
}
