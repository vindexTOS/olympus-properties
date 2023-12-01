import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropertyCard from "./components/ProductCard";
import { RecivedPropertyTypes } from "../../../../Types/propertyTypes";
import Pagination from "./components/Pagination";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { GetAllpropertysThunk } from "../../../../Redux/Property/property-thunk";
import LoadingSkeleton from "./components/LoadingSkeleton";
function PropertysList() {
  //  RecivedPropertyTypes[]
  const proepertyData = useSelector((state: any) => state.propertyReducer.data);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { loading } = useSelector((state: any) => state.propertyReducer);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    if (newPage > proepertyData.totalPages || newPage < 1) {
      newPage = 1;
    }

    let query = {
      page: newPage,
      limit: 5,
      minPrice: 0,
      maxPrice: 9000000,
      featureType: "",
      propertyType: "",
    };
    dispatch(GetAllpropertysThunk(query));
    setCurrentPage(newPage);
  };
  if (loading) {
    return (
      <div className="w-[100%] h-[100%] px-5 py-10 flex   flex-col items-center gap-8 justify-between bg-brand-white">
        <div className="w-[100%] items-center justify-center    flex flex-wrap">
          {new Array(5).fill("").map((val: string, i: number) => (
            <LoadingSkeleton key={i} />
          ))}
        </div>
        <div className="inline-flex mt-7 xs:mt-0  gap-1">
          <span className="bg-gray-300 rounded-md w-[70px] h-[40px]   animate-pulse"></span>
          <span className=" bg-gray-300  rounded-md w-[70px] h-[40px]  animate-pulse "></span>
        </div>
      </div>
    );
  }

  if (proepertyData.data && proepertyData.data.length > 0) {
    return (
      <div className="w-[100%] h-[100%] px-5 py-10 flex   flex-col items-center gap-10 justify-between bg-brand-white">
        <div className="w-[100%] items-center justify-center  flex flex-wrap">
          {proepertyData.data.map((val: RecivedPropertyTypes) => {
            return <PropertyCard key={val.id} property={val} />;
          })}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={proepertyData.totalPages}
          dataLength={proepertyData.dataLength}
          onPageChange={handlePageChange}
        />
      </div>
    );
  } else {
    <div>No Homes</div>;
  }
}

export default PropertysList;
