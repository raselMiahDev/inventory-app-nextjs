import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../slice/dashboardSlice";
import profileSlice from "../slice/profileSlice";
import brandSlice from "../slice/brandSlice";
import supplierSlice from "../slice/supplierSlice";
import categorySlice from "../slice/categorySlice";
import customerSlice from "../slice/customerSlice";
import expenseSlice from "../slice/expenseSlice";
import expenseTypeSlice from "../slice/expenseTypeSlice";
import purchaseSlice from "../slice/purchaseSlice";
import reportSlice from "../slice/reportSlice";
import productSlice from "../slice/productSlice";
import returnSlice from "../slice/returnSlice";
import sallsSlice from "../slice/sellSlice";
export default configureStore({
  reducer: {
    dashboard: dashboardSlice,
    profile: profileSlice,
    brand: brandSlice,
    supplier: supplierSlice,
    category: categorySlice,
    customer: customerSlice,
    expense: expenseSlice,
    expensetype: expenseTypeSlice,
    purchase: purchaseSlice,
    report: reportSlice,
    product: productSlice,
    return: returnSlice,
    sale: sallsSlice,
  },
});
