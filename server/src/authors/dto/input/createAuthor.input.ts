import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAuthorInput {
  @Field()
  @IsNotEmpty()
  name: string;
}
