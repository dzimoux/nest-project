import { Injectable } from '@nestjs/common';

@Injectable()
export class SellerAdminService {
  ban(id: string) {
    return 'Client banned';
  }
}
