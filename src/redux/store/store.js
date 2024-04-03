import { configureStore } from "@reduxjs/toolkit";
import dynamic from "next/dynamic";
const dashboardSlice = () => dynamic(import("./../slice/dashboardSlice"));
const profileSlice = () => dynamic(import("./../slice/profileSlice"));
const brandSlice = () => dynamic(import("./../slice/brandSlice"));
const supplierSlice = () => dynamic(import("./../slice/supplierSlice"));
const categorySlice = () => dynamic(import("./../slice/categorySlice"));
const customerSlice = () => dynamic(import("./../slice/customerSlice"));
const expenseSlice = () => dynamic(import("./../slice/expenseSlice"));
const expenseTypeSlice = () => dynamic(import("./../slice/expenseTypeSlice"));
const purchaseSlice = () => dynamic(import("./../slice/purchaseSlice"));
const reportSlice = () => dynamic(import("./../slice/reportSlice"));
const productSlice = () => dynamic(import("./../slice/productSlice"));
const returnSlice = () => dynamic(import("./../slice/returnSlice"));
const sallsSlice = () => dynamic(import("./../slice/sellSlice"));
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
