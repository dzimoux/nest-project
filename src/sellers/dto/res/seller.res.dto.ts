import { PickType } from '@nestjs/swagger';

import { SellerBaseResDto } from './seller.base.res.dto';

export class SellerResDto extends PickType(SellerBaseResDto, [
  'id',
  'age',
  'name',
  'surname',
  'email',
  'gender',
  'accountForBusiness',
  'password',
  'car',
]) {}
