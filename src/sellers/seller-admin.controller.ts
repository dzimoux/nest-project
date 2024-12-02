import { Body, Controller, Post } from '@nestjs/common';

import { SellerAdminService } from './seller-admin.service';

@Controller('seller-admin')
export class SellerAdminController {
  constructor(private readonly sellerAdminService: SellerAdminService) {}

  @Post()
  ban(@Body() dto: any) {
    return this.sellerAdminService.ban(dto.id);
  }
}
