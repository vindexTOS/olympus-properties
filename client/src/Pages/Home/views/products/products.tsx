import React from "react";
import { useSelector } from "react-redux";
import PropertyCard from "./components/ProductCard";
function PropertysList() {
  const proepertyData = useSelector((state: any) => state.propertyReducer.data);
  const { loading } = useSelector((state: any) => state.propertyReducer);

  if (loading) {
    return <div>Loading</div>;
  }
  if (proepertyData && proepertyData.length > 0) {
    return (
      <div className="w-[100%] h-[100%] px-5 flex flex-wrap bg-brand-white">
        {proepertyData.map((val: any) => {
          return <PropertyCard key={val.id} property={val} />;
        })}
      </div>
    );
  } else {
    <div>No Homes</div>;
  }
}

export default PropertysList;
