import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { IsObjectId } from 'src/common/decorator/IsObjectId.decorator';

@InputType()
export class AuthorInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsObjectId()
  @IsOptional()
  _id?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  name?: string;
}
