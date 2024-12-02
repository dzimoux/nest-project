import { PickType } from '@nestjs/swagger';

import { SellerBaseReqDto } from './seller-base-req-dto';

export class CreateSellerReqDto extends PickType(SellerBaseReqDto, [
  'id',
  'age',
  'name',
  'surname',
  'email',
  'phone',
  'password',
  'gender',
  'accountForBusiness',
  'car',
]) {}
