import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsObjectIdConstraint } from '../validator/ObjectId.validator';

export function IsObjectId(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsObjectId',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsObjectIdConstraint,
    });
  };
}
