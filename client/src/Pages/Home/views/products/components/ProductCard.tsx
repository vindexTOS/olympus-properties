import React from "react";
import { RecivedPropertyTypes } from "../../../../../Types/propertyTypes";

const PropertyCard = ({ property }: { property: RecivedPropertyTypes }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden h-[250px] w-[250px] mx-4 my-4">
      <img
        src="https://emacplan.co.za/wp-content/themes/homely/images/property-img-default.gif"
        alt="Property"
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{property.propertyName}</h2>
        <p className="text-gray-600 text-sm mb-2">{property.description}</p>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>

        <div className="flex justify-between items-center">
          <span className="text-blue-500 font-bold text-lg">
            ${property.price}
          </span>
          <span className="text-gray-500">{property.propertyType}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
