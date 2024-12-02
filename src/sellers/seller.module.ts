import { forwardRef, Module } from '@nestjs/common';

import { ArticlesModule } from '../articles/articles.module';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { SellerAdminController } from './seller-admin.controller';
import { SellerAdminService } from './seller-admin.service';

@Module({
  imports: [forwardRef(() => ArticlesModule)],
  controllers: [SellerController, SellerAdminController],
  providers: [SellerService, SellerAdminService],
  exports: [SellerService],
})
export class SellerModule {}
