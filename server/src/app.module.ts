import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { AuthorModule } from './authors/author.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '172.26.22.100',
      port: 27017,
      username: 'root',
      password: 'root',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
      authSource: 'admin',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: true,
      debug: true,
    }),
    AuthorModule,
  ],
})
export class AppModule {}
