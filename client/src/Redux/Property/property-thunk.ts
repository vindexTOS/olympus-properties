import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import {
  PhotoPayLoadForRedux,
  TPropertyTypes,
  TpropertyAndOwner,
} from "../../Types/propertyTypes";

export const CreatePropertyThunk = createAsyncThunk(
  "creatProperty/post",
  async (obj: TpropertyAndOwner, { dispatch }) => {
    let { OwnerInformation, propertyInformation } = obj;
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}property`,
        { OwnerInformation, propertyInformation }
      );

      let propertyId = res.data.id;
      // console.log(res.data  )
      // console.log(res  )
      await dispatch(UploadPhotos({ pictures: obj.pictures, propertyId }));

      return res.data;
    } catch (error) {
      const err: any = error;
      console.log(error);
      throw new Error(err.response.data.message);
    }
  }
);

export const UploadPhotos = createAsyncThunk(
  "uploadphotos/post",
  async (obj: PhotoPayLoadForRedux) => {
    try {
      const { pictures, propertyId } = obj;
      console.log(obj);
      const formData = new FormData();
      pictures.forEach((file, index) => {
        formData.append(`pictures`, file);
      });

      formData.append("propertyId", propertyId);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}pictures`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return res.data;
    } catch (error) {
      const err: any = error;
      console.error(error);
      throw new Error(err.response.data.message);
    }
  }
);

export const GetAllpropertysThunk = createAsyncThunk(
  "allpropertys/get",
  async (querys: any) => {
    // property?page=1&limit=1&minPrice=1000&maxPrice=2000&featureType=RENT&propertyType=HOUSE
    try {
      const {
        page,
        limit,
        minPrice,
        maxPrice,
        featureType,
        propertyType,
        search,
        location,
      } = querys;
      const res = await axios.get(
        `${
          import.meta.env.VITE_BASE_API_URL
        }property?page=${page}&limit=${limit}&minPrice=${minPrice}&maxPrice=${maxPrice}${
          featureType &&
          `&featureType=${featureType} propertyType ${propertyType`&propertyType=${propertyType}`}`
        }${search && `&search=${search}`}${location && `&location=${location}`}`
      );
      return res.data;
    } catch (error) {
      throw new Error("ERROR");
    }
  }
);

export const Updateproperty = createAsyncThunk(
  "property/update",
  async (obj: TPropertyTypes) => {
    // try {
    //   const res = await axios.patch(
    //     `${import.meta.env.VITE_BASE_API_URL}property/${obj.id}`,
    //     { ...obj.data },
    //   )
    //   return res.data
    // } catch (error) {
    //   throw new Error('ERROR')
    // }
  }
);
