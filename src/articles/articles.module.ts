import { Module } from '@nestjs/common';

import { ClientsModule } from '../clients/clients.module';
import { CommentsModule } from '../comments/comments.module';
import { SellerModule } from '../sellers/seller.module';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';

@Module({
  imports: [ClientsModule, CommentsModule, SellerModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
