import React from 'react'

import { useNavigate } from 'react-router-dom'

const PropertyCard = ({ property }: { property: any }) => {
  const naviagtion = useNavigate()
  const goToSinglePage = (id: string) => {
    naviagtion(`/property/${id}`)
  }

  return (
    <div
      onClick={() => goToSinglePage(property.id)}
      className="bg-brand-white shadow-lg rounded-lg overflow-hidden h-[400px] w-[320px] mx-4 my-4 transform transition-transform duration-300 hover:scale-105"
    >
      <div className="relative">
        <img
          src={
            property.mainPicture
              ? `data:image/jpeg;base64,${property.mainPicture}`
              : 'https://emacplan.co.za/wp-content/themes/homely/images/property-img-default.gif'
          }
          alt="Property"
          className="w-full h-[200px] object-cover"
        />
        <span className="absolute  top-0 right-0 p-2 bg-blue-500 text-green-400 font-bold">
          ${property.price}
        </span>
        <span className="absolute top-0 left-0 p-2 bg-gray-500 text-brand-white">
          {property.propertyType}
        </span>
      </div>

      <div className="p-4">
        <div className="flex  items-center justify-around ">
          <h2 className="text-xl font-semibold mb-2">
            {property.propertyName}
          </h2>
          <p className="text-gray-400">
            Squar Area <span>{property.sqArea}</span>
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        <p className="text-gray-600 text-sm mb-2">
          {property.description.slice(0, 80)}...
        </p>
      </div>
      <p className="text-gray-600 py-10 px-3">
        Date <span>{property.uploadetAt.slice(0, 10)}</span>
      </p>
    </div>
  )
}

export default PropertyCard
