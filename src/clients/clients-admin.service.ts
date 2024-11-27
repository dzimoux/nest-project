import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsAdminService {
  ban(id: string) {
    return 'Client banned';
  }
}
