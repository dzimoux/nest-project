import { PickType } from '@nestjs/swagger';

import { ClientBaseResDto } from './client.base.res.dto';

export class ClientResDto extends PickType(ClientBaseResDto, [
  'id',
  'age',
  'name',
  'surname',
  'email',
  'gender',
  'accountForBusiness',
  'password',
]) {}
