import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetTaskArgs {
  @Field(() => String)
  @IsNotEmpty()
  _id: string;
}
