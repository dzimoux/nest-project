import { PickType } from '@nestjs/swagger';

import { ClientBaseReqDto } from './client-base-req-dto';

export class UpdateClientReqDto extends PickType(ClientBaseReqDto, [
  'id',
  'name',
  'email',
  'age',
]) {}
