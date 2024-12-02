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

import { ClientsService } from './clients.service';
import { ClientListReqDto } from './dto/req/client-list-req.dto';
import { CreateClientReqDto } from './dto/req/create-client-req.dto';
import { UpdateClientReqDto } from './dto/req/update-client-req.dto';
import { ClientResDto } from './dto/res/client.res.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiBearerAuth()
  @ApiConflictResponse({ description: 'Conflict' })
  @Post()
  async create(
    @Body() createClientDto: CreateClientReqDto,
  ): Promise<ClientResDto> {
    return await this.clientsService.create(createClientDto);
  }

  @Get()
  findAll(@Query() query: ClientListReqDto) {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientReqDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
