import { PickType } from '@nestjs/swagger';

import { ClientBaseReqDto } from './client-base-req-dto';

export class CreateClientReqDto extends PickType(ClientBaseReqDto, [
  'id',
  'age',
  'name',
  'surname',
  'email',
  'phone',
  'password',
  'gender',
  'accountForBusiness',
]) {}
