import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticlesModule } from './articles/articles.module';
import { ClientsModule } from './clients/clients.module';
import { CommentsModule } from './comments/comments.module';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'nestProjectDB',
          entities: [UserEntity],
          synchronize: false,
        };
      },
      inject: [],
    }),
    ClientsModule,
    ArticlesModule,
    CommentsModule,
  ],
})
export class AppModule {}
