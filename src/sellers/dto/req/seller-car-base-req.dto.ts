import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsInt, IsString, Length, Max, Min } from 'class-validator';

import { TransformHelper } from '../../../common/helpers/transform.helper';

export class SellerCarBaseReqDto {
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(3, 30)
  producer: string;

  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(3, 30)
  model: string;

  @ApiProperty({ example: 2019 })
  @Type(() => Number)
  @IsInt()
  @Min(1980)
  @Max(2024)
  year: number;

  @ApiProperty({ example: 100000 })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(500000)
  mileage: number;
}
