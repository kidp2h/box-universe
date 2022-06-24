import { TaskStatus } from './types/TaskStatus.enum';
import { Column, Entity, BaseEntity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Task extends BaseEntity {
  @Field(() => String, { nullable: false })
  @ObjectIdColumn()
  _id: ObjectId | string;

  @Field({ nullable: false })
  @Column()
  title: string;

  @Field({ nullable: false })
  @Column()
  description: string;

  @Field(() => String, {
    nullable: false,
  })
  @Column()
  status: TaskStatus;
}
