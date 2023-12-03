import { FeatureType, PropertyType } from '@prisma/client';
import {
  IsInt,
  IsPositive,
  IsNumber,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class QueryDataDto {
  @IsOptional()
  page?: number;

  @IsOptional()
  limit?: number;

  @IsOptional()
  minPrice?: number;

  @IsOptional()
  maxPrice?: number;

  @IsOptional()
  location?: string;

  @IsOptional()
  @IsEnum(FeatureType)
  featureType?: FeatureType;

  @IsOptional()
  @IsEnum(PropertyType)
  propertyType?: PropertyType;

  @IsOptional()
  search?: string;
}
