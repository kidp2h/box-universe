import { Field } from '@nestjs/graphql';
import { BaseEntity } from 'typeorm';

export class AuthorEntity extends BaseEntity {
  @Field(() => String, { nullable: false })
  name: string;
}
