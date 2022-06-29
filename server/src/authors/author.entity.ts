import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author extends BaseEntity {
  @ObjectIdColumn()
  @Field(() => String, { nullable: false })
  _id: ObjectId | string;

  @Field(() => String, { nullable: false })
  @Column()
  name: string;
}
