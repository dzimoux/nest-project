import { Body, Controller, Post } from '@nestjs/common';

import { ClientsAdminService } from './clients-admin.service';

@Controller('clients-admin')
export class ClientsAdminController {
  constructor(private readonly clientsAdminService: ClientsAdminService) {}

  @Post()
  ban(@Body() dto: any) {
    return this.clientsAdminService.ban(dto.id);
  }
}
