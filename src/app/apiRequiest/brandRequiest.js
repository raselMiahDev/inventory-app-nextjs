"use client";
const BASE_URL = "http://localhost:8080/api/v1";
import { ErrorToast, SuccessToast } from "@/helper/formHelper";
const Headers = null;
import axios from "axios";
//================> CREATE_BRAND_REQUEST <================
export const CREATE_BRAND_REQUEST = async (name) => {
  try {
    const URL = BASE_URL + "/create-brand";
    const reqBody = { name: name };
    const { data } = await axios.post(URL, reqBody, Headers);
    if (data.status === "success") {
      SuccessToast("Brand Create Success");
    } else {
      ErrorToast("Something went wrong");
    }
    return data;
  } catch (e) {
    ErrorToast("Something went wrong");
    return false;
  }
};
//================> BRAND_LIST_REQUEST <================
export const BRAND_LIST_REQUEST = async (pageNo, parPage, keyword) => {
  try {
    const URL = BASE_URL + `/brand-list/${pageNo}/${parPage}/${keyword}`;
    const { data } = await axios.get(URL, Headers);
    return data;
  } catch (e) {
    ErrorToast("Something went wrong");
    return false;
  }
};
//================> BRAND_DETAILS_REQUEST <================
export const BRAND_DETAILS_REQUEST = async (id) => {
  try {
    const URL = BASE_URL + "/brand-details/" + id;
    const { data } = await axios.get(URL, Headers);
    return data;
  } catch (e) {
    ErrorToast("Something went wrong");
    return false;
  }
};
//================> BRAND_DROPDOWN_REQUEST <================
export const BRAND_DROPDOWN_REQUEST = async () => {
  try {
    const URL = BASE_URL + "/brand-dropdown";
    const { data } = await axios.get(URL, Headers);
    return data;
  } catch (e) {
    ErrorToast("Something went wrong");
    return false;
  }
};
//================> DELETE_BRAND__REQUEST <================
export const DELETE_BRAND__REQUEST = async (id) => {
  try {
    const URL = BASE_URL + "/delete-brand/" + id;
    const result = await axios.get(URL, Headers);
    if (result.status === 200 && result.data["status"] === "associate") {
      ErrorToast(result.data["data"]);
      return false;
    }
    if (result.status === 200 && result.data["status"] === "success") {
      SuccessToast(result.data["data"]);
      return true;
    } else {
      ErrorToast("Requiest fail !! try again");
      return false;
    }
  } catch (e) {
    ErrorToast("Something went wrong");
    return false;
  }
};
