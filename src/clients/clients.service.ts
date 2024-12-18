import { Injectable } from '@nestjs/common';

import { CreateClientReqDto } from './dto/req/create-client-req.dto';
import { UpdateClientReqDto } from './dto/req/update-client-req.dto';
import { ClientResDto } from './dto/res/client.res.dto';

@Injectable()
export class ClientsService {
  public async create(
    createClientDto: CreateClientReqDto,
  ): Promise<ClientResDto> {
    console.log(createClientDto);
    return {} as ClientResDto;
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientReqDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }

  public async checkAbilityToEditArticle(userId: string, articleId: string) {}
}
