import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotIn,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';

import { GenderEnum } from '../../enums/gender.enum';

export class ClientBaseReqDto {
  @IsInt()
  @Min(1)
  @Max(999999999)
  id: number;
  @IsString()
  @Length(2, 20)
  name: string;
  @IsOptional()
  @IsString()
  @Length(2, 20)
  surname?: string;
  @IsString()
  @IsNotIn(['password', 'pass', '987654321', '123456789'])
  @ApiProperty({ example: 'lorenZo432_' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long, include an uppercase letter,' +
        ' a lowercase letter, a number, and a special character.',
    },
  )
  password: number;
  @IsInt()
  @Min(1)
  @Max(120)
  age: number;
  @IsOptional()
  @IsEnum(GenderEnum)
  gender: GenderEnum;
  @IsBoolean()
  @IsOptional()
  accountForBusiness: boolean = false;
  @IsString()
  @IsEmail()
  @ApiProperty({ example: 'yourname@gmail.com' })
  email: string;
  @IsOptional()
  @ValidateIf(({ obj }) => !obj.email)
  phone: number;
}
