 import { IsNotEmpty } from 'class-validator';
import { Author } from 'src/authors/author.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: Author;

  @IsNotEmpty()
  description: string;
}
