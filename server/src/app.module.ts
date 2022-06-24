import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { AuthorsModule } from './authors/authors.module';

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
      autoSchemaFile: true,
      playground: true,
      debug: true,
    }),
    AuthorsModule,
  ],
})
export class AppModule {}
