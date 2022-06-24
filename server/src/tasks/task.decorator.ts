import { createParamDecorator } from '@nestjs/common';

export const TaskDecorator = createParamDecorator((data: unknown) => {
  console.log('dec', data);
  return 'task decorator';
});
