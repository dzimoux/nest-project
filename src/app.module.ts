import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticlesModule } from './articles/articles.module';
import { ClientsModule } from './clients/clients.module';
import { CommentsModule } from './comments/comments.module';
import configuration from './configs/configuration';
import { UserEntity } from './entities/user.entity';
import { SellerModule } from './sellers/seller.module';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => {
    //     return {
    //       type: 'mysql',
    //       host: 'localhost',
    //       port: 3000,
    //       username: 'postgres',
    //       password: 'postgres',
    //       database: 'nestProjectDB',
    //       entities: [UserEntity],
    //       synchronize: false,
    //     };
    //   },
    //   inject: [],
    // }),
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    ClientsModule,
    SellerModule,
    ArticlesModule,
    CommentsModule,
  ],
})
export class AppModule {}
