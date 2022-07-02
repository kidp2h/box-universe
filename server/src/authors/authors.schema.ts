import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';

export type AuthorDocument = Author & mongoose.Document;

@Schema({ timestamps: true })
@ObjectType()
export class Author {
  @Field(() => String, { nullable: false })
  _id: ObjectId;

  @Field(() => String, { nullable: false })
  @Prop({
    required: [true, 'Name author should be not empty'],
    type: mongoose.Schema.Types.String,
    unique: true,
  })
  name: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
