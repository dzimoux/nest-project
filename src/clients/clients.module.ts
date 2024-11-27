import { Module } from '@nestjs/common';

import { ClientsAdminController } from './client-admin.controller';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientsAdminService } from './clients-admin.service';

@Module({
  controllers: [ClientsController, ClientsAdminController],
  providers: [ClientsService, ClientsAdminService],
  exports: [ClientsService],
})
export class ClientsModule {}
