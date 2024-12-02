import { SellerCarBaseReqDto } from "../req/seller-car-base-req.dto";

export class SellerBaseResDto {
  id: number;
  name: string;
  surname: string;
  age: number;
  password: string;
  email: string;
  gender: string;
  accountForBusiness: boolean;
  car: SellerCarBaseReqDto;
}
