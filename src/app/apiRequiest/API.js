"use client";
const BASE_URL = "http://localhost:8080/api/v1";
import { ErrorToast, SuccessToast } from "@/helper/formHelper";
const Headers = null;
import axios from "axios";
//================> REGISTER_REQUEST <================
export const REGISTER_REQUEST = async (
  email,
  firstName,
  lastName,
  phone,
  password
) => {
  try {
    const URL = BASE_URL + "/signup";
    const reqBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      password: password,
    };
    const { data } = await axios.post(URL, reqBody);
    console.log(data);
    if (data.status == "success") {
      SuccessToast("Acount Create Success");
      return data;
    }
  } catch (e) {
    ErrorToast("Something went wrong");
    return false;
  }
};
//================> LOGIN_REQUEST <================
export const LOGIN_REQUEST = async (email, password) => {
  try {
    const URL = BASE_URL + "/login";
    const reqBody = {
      email: email,
      password: password,
    };
    const { data } = await axios.post(URL, reqBody);
    if (data.status === "Unauthorized") {
      ErrorToast("Invalid Email or password");
    }
    return data;
  } catch (e) {
    ErrorToast("Something went wrong");
    return false;
  }
};
