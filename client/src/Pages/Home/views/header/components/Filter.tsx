import { useEffect, useReducer } from "react";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import MinMaxInput from "./MinMaxInput";
import { UseLanguageContext } from "../../../../../contexts/LanguageContext";
function Filter() {
  const { refrenceData } = UseLanguageContext();
  const { featureType, propertyType, location } = refrenceData;
  const initialstate = {
    location: "",
    propertyType: "",
    featureType: "",
    min: "",
    max: "",
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
  const setStateAction = (type: string, state: string) => {
    dispatch({ type: type, payload: state });
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
        <MinMaxInput title={"min~$"} />
        <MinMaxInput title="max~$" />
        {/* TO DO add filter button */}
      </div>
      <SearchBar />
    </div>
  );
}

export default Filter;
