import { jwtDecode } from "jwt-decode";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Cookies from "universal-cookie";
import { UserType } from "../Types/user-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { GetAllpropertysThunk } from "../Redux/Property/property-thunk";

type Cell = {
  adminData: UserType;
};

const GeneralContext = createContext<Cell | null>(null);

export const GeneralContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookies = new Cookies();
  const navigation = useNavigate();
  const { token } = useSelector((state: any) => state.AuthReducer);
  const { data } = useSelector((state: any) => state.propertyReducer);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [adminData, setAdmin] = useState<UserType | any>();
  // TO DO make global error handling

  useEffect(() => {
    let query = {
      page: 1,
      limit: 5,
      minPrice: 0,
      maxPrice: 9000000,
      featureType: "",
      propertyType: "",
      search: "",
      location: "",
    };
    dispatch(GetAllpropertysThunk(query));
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <GeneralContext.Provider value={{ adminData }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const UseGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("Context Not Wrapped Reload Page");
  }

  return context;
};
