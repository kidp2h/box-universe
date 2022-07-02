import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { IsObjectId } from 'src/common/decorator/IsObjectId.decorator';

@ArgsType()
@InputType()
export class TaskInput {
  @IsOptional()
  @IsString()
  @IsObjectId()
  @Field(() => String, { nullable: true })
  _id?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  title?: string;

  @IsOptional()
  @IsString()
  @IsObjectId()
  @Field(() => String, { nullable: true })
  author?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;
}
