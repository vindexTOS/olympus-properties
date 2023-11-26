import { IsString, IsNotEmpty, MinLength, IsNumber, IsEnum, Min } from 'class-validator';
import { FeatureType, PropertyType } from "@prisma/client";

export class CreatePropertyDto {

    OwnerInformation:  OwnerInformation;
    propertyInformation : PropertyInformation;
  
}
export class OwnerInformation {
    @IsString()
    @IsNotEmpty()
    @MinLength(5, { message: 'owner full name should be at least 5 characters long' })
    fullName: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    phoneNumber: string;
}

export class PropertyInformation {
      
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'propertyName should be at least 3 characters long' })
    propertyName: string;
    @IsEnum(PropertyType, { message: 'Invalid property PropertyType' })
    propertyType: PropertyType;

    @IsEnum(FeatureType, { message: 'Invalid FeatureType' })
    featureType: FeatureType;

    @IsNumber()
    @Min(0, { message: 'price should be a positive number' })
    price: number;

    @IsNumber()
    @Min(1800, { message: 'buildYear should be at least 1800' })
    buildYear: number;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsNumber()
    @Min(0, { message: 'sqArea area should be a positive number' })
    sqArea: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(10, { message: 'description should be at least 10 characters long' })
    description: string;
}
 