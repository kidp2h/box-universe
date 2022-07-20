import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { IsObjectId } from '@decorators/IsObjectId.decorator';

import { User } from '../users.schema';

@ArgsType()
@InputType()
export class UserInput {
  @IsOptional()
  @IsString()
  @IsObjectId()
  @Field(() => String, { nullable: true })
  _id?: string | ObjectId | User;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  username?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  password?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  email?: string;
}
