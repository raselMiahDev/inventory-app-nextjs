import store from "../../redux/store/store";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../../helper/formHelper";
import { getToken } from "../../helper/sessionHelper";
import {
  OnChangeCustomerInput,
  ResetFormValue,
  SetCustomerList,
  SetCustomerListTotal,
} from "../../redux/slice/customerSlice";
const BASE_URL = "http://localhost:8080/api/v1";

const AxiosHeader = { headers: { token: getToken() } };

export const CREATE_CUSTOMER_REQUEST = async (name, email, phone, address) => {
  try {
    let URL = BASE_URL + "/create-customer";
    let PostBody = { name, email, phone, address };
    const result = await axios.post(URL, PostBody, AxiosHeader);

    if (result.status === 200 && result.data["status"] === "success") {
      SuccessToast("Request Successful");
      return result.data;
    } else if (result.status === 200 && result.data["status"] === "fail") {
      if (result.data["data"]["keyPattern"]["Phone"] === 1) {
        ErrorToast("Mobile Number Already Exist");
        return false;
      }
    } else {
      ErrorToast("Request Fail ! Try Again");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong");
  }
};
export const CUSTOMER_LIST_REQUEST = async (pageNo, perPage, searchKeyword) => {
  try {
    let URL =
      BASE_URL +
      "/customer-list/" +
      pageNo +
      "/" +
      perPage +
      "/" +
      searchKeyword;
    const result = await axios.get(URL, AxiosHeader);
    if (result.status === 200 && result.data["status"] === "success") {
      if (result.data["data"][0]["Rows"].length > 0) {
        store.dispatch(SetCustomerList(result.data["data"][0]["Rows"]));
        store.dispatch(
          SetCustomerListTotal(result.data["data"][0]["Total"][0]["count"])
        );
      } else {
        store.dispatch(SetCustomerList([]));
        store.dispatch(SetCustomerListTotal(0));
        ErrorToast("No Data Found");
      }
    } else {
      ErrorToast("Something Went Wrong");
    }
  } catch (e) {
    ErrorToast("Something Went Wrong");
  }
};

export async function FillCustomerFormRequest(ObjectID) {
  try {
    let URL = BASE_URL + "/CustomersDetailsByID/" + ObjectID;
    const result = await axios.get(URL, AxiosHeader);
    if (result.status === 200 && result.data["status"] === "success") {
      let FormValue = result.data["data"][0];
      store.dispatch(
        OnChangeCustomerInput({
          Name: "CustomerName",
          Value: FormValue["CustomerName"],
        })
      );
      store.dispatch(
        OnChangeCustomerInput({ Name: "Phone", Value: FormValue["Phone"] })
      );
      store.dispatch(
        OnChangeCustomerInput({ Name: "Email", Value: FormValue["Email"] })
      );
      store.dispatch(
        OnChangeCustomerInput({ Name: "Address", Value: FormValue["Address"] })
      );
      return true;
    } else {
      debugger;
      ErrorToast("Request Fail ! Try Again");
      return false;
    }
  } catch (e) {
    debugger;
    ErrorToast("Something Went Wrong");
    store.dispatch(HideLoader());
    return false;
  }
}

export const DELETE_CUSTOMER_REQUEST = async (id) => {
  try {
    let URL = BASE_URL + "/delete-customer/" + id;
    const result = await axios.delete(URL, AxiosHeader);
    if (result.status === 200 && result.data["status"] === "associate") {
      ErrorToast(result.data["data"]);
      return false;
    }
    if (result.status === 200 && result.data["status"] === true) {
      SuccessToast("Request Successful");
      return true;
    } else {
      ErrorToast("Request Fail ! Try Again");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong");
    return false;
  }
};
