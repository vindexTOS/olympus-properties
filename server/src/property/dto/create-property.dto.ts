import { IsString, IsNotEmpty, MinLength, IsNumber, IsEnum, Min } from 'class-validator';
import { FeatureType, PropertyType } from "@prisma/client";

export class CreatePropertyDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'Property name should be at least 3 characters long' })
    propertyName: string;

    @IsEnum(PropertyType, { message: 'Invalid property type' })
    propertyType: PropertyType;

    @IsEnum(FeatureType, { message: 'Invalid feature type' })
    featureType: FeatureType;

    @IsNumber()
    @Min(0, { message: 'Price should be a positive number' })
    price: number;

    @IsNumber()
    @Min(1800, { message: 'Build year should be at least 1800' })
    buildYear: number;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsNumber()
    @Min(0, { message: 'Square area should be a positive number' })
    sqArea: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(10, { message: 'Description should be at least 10 characters long' })
    description: string;
}
 