import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorArgs {
  @Field(() => String, { nullable: true })
  _id?: string;

  @Field(() => String, { nullable: true })
  name?: string;
}
