import { forwardRef, Module } from '@nestjs/common';

import { ArticlesModule } from '../articles/articles.module';
import { ClientsAdminController } from './client-admin.controller';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientsAdminService } from './clients-admin.service';

@Module({
  imports: [forwardRef(() => ArticlesModule)],
  controllers: [ClientsController, ClientsAdminController],
  providers: [ClientsService, ClientsAdminService],
  exports: [ClientsService],
})
export class ClientsModule {}
