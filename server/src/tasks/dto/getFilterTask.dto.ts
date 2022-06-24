import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../types/TaskStatus.enum';

export class GetTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
