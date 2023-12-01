import { useEffect, useReducer } from "react";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import MinMaxInput from "./MinMaxInput";
import { UseLanguageContext } from "../../../../../contexts/LanguageContext";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { GetAllpropertysThunk } from "../../../../../Redux/Property/property-thunk";
function Filter() {
  const { refrenceData } = UseLanguageContext();
  const { featureType, propertyType, location } = refrenceData;
  const initialstate = {
    location: "",
    propertyType: "",
    featureType: "",
    min: 0,
    max: 900000,
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "location":
        return { ...state, location: action.payload };
      case "propertyType":
        return { ...state, propertyType: action.payload };
      case "featureType":
        return { ...state, featureType: action.payload };
      case "min":
        return { ...state, min: action.payload };
      case "max":
        return { ...state, max: action.payload };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);
  const setStateAction = (type: string, state: string | number) => {
    dispatch({ type: type, payload: state });
  };

  const ReduxDispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const filterBtn = () => {
    const { location, propertyType, featureType, min, max } = state;
    let query = {
      page: 1,
      limit: 5,
      minPrice: min,
      maxPrice: max,
      featureType: featureType,
      propertyType: propertyType,
      search: "",
      location: location,
    };
    console.log(state);
    ReduxDispatch(GetAllpropertysThunk(query));
  };
  return (
    <div className="w-[100%]   h-[170px] py-2 rounded-t-[7px] bg-gray-100 transition duration-300 hover:bg-[#ffc000]  flex items-center justify-around flex-col">
      <div className="flex justify-around  gap-2 ">
        <DropDown
          options={featureType.data}
          setStateAction={setStateAction}
          type="featureType"
        />
        <DropDown
          options={propertyType.data}
          setStateAction={setStateAction}
          type="propertyType"
        />
        <DropDown
          options={location.data}
          setStateAction={setStateAction}
          type="location"
        />
        <MinMaxInput
          title={"min~$"}
          setStateAction={setStateAction}
          type="min"
        />
        <MinMaxInput title="max~$" setStateAction={setStateAction} type="max" />
        <div
          onClick={filterBtn}
          className="rounded-md shadow-sm w-[120px] flex items-center justify-between"
        >
          <button className="  justify-center w-full h-[48px] rounded-[8px] px-4 py-2 text-sm font-medium leading-5 text-brand-white transition duration-150 ease-in-out bg-brand-gold border border-transparent active:bg-gray-100 focus:outline-none focus:border-gray-200 focus:shadow-outline-indigo hover:bg-gray-400">
            Filter
          </button>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}

export default Filter;
