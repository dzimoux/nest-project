import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiConflictResponse } from '@nestjs/swagger';

import { CreateSellerReqDto } from './dto/req/create-seller-req.dto';
import { SellerListReqDto } from './dto/req/seller-list-req.dto';
import { UpdateSellerReqDto } from './dto/req/update-seller-req.dto';
import { SellerResDto } from './dto/res/seller.res.dto';
import { SellerService } from './seller.service';

@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @ApiBearerAuth()
  @ApiConflictResponse({ description: 'Conflict' })
  @Post()
  async create(
    @Body() createSellerDto: CreateSellerReqDto,
  ): Promise<SellerResDto> {
    return await this.sellerService.create(createSellerDto);
  }

  @Get()
  findAll(@Query() query: SellerListReqDto) {
    return this.sellerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSellerDto: UpdateSellerReqDto) {
    return this.sellerService.update(+id, updateSellerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerService.remove(+id);
  }
}
