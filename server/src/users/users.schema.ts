import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import { UserProvider } from './users.type';

export type UserDocument = User & mongoose.Document;

@Schema({
  timestamps: true,
})
@ObjectType()
export class User {
  @Field(() => String, { nullable: false })
  _id: ObjectId;

  @Field({ nullable: false })
  @Prop({ required: true })
  username: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  password: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  email: string;

  @Field(() => String)
  @Prop({ default: null, type: Object })
  provider: UserProvider;
}

export const UserSchema = SchemaFactory.createForClass(User);
