import { Injectable } from '@nestjs/common';

import { CreateSellerReqDto } from './dto/req/create-seller-req.dto';
import { UpdateSellerReqDto } from './dto/req/update-seller-req.dto';
import { SellerResDto } from './dto/res/seller.res.dto';

@Injectable()
export class SellerService {
  public async create(
    createSellerDto: CreateSellerReqDto,
  ): Promise<SellerResDto> {
    console.log(createSellerDto);
    return {} as SellerResDto;
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateSellerDto: UpdateSellerReqDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }

  public async checkAbilityToEditArticle(userId: string, articleId: string) {}
}
