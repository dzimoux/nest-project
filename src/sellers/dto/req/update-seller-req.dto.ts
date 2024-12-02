import { PickType } from '@nestjs/swagger';

import { SellerBaseReqDto } from './seller-base-req-dto';

export class UpdateSellerReqDto extends PickType(SellerBaseReqDto, [
  'id',
  'name',
  'email',
  'age',
]) {}
