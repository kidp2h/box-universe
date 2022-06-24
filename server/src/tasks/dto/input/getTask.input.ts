import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class GetTaskInput {
  @Field()
  _id: string;

  @Field()
  title: string;

  @Field()
  description: string;
}
