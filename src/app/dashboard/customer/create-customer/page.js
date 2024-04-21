"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ErrorToast, IsEmail, IsEmpty } from "@/helper/formHelper";
import { CREATE_CUSTOMER_REQUEST } from "@/app/apiRequiest/customerApi";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SubmitButton = dynamic(() =>
  import("../../../../components/common/SubmitButton")
);
const InputField = dynamic(() =>
  import("./../../../../components/common/InputField")
);
const page = () => {
  const router = useRouter();
  const [btnLoader, setBtnLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const changeHandaler = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };

  const submit = async () => {
    const { name, email, phone, address } = formData;
    if (IsEmpty(name)) {
      ErrorToast("Name is required");
      return false;
    } else if (IsEmail(email)) {
      ErrorToast("Email is required");
      return false;
    } else if (IsEmpty(phone)) {
      ErrorToast("Phone number is required");
      return false;
    } else if (IsEmpty(address)) {
      ErrorToast("Address number is required");
      return false;
    } else {
      setBtnLoader(true);
      await CREATE_CUSTOMER_REQUEST(name, email, phone, address).then((res) => {
        setBtnLoader(false);
        if (res.status === "success") {
          router.push("/dashboard/customer/customer-list");
        }
      });
    }
  };
  return (
    <div className="px-10">
      <div className="py-5">
        <h1 className=" text-2xl text-slate-700">Create customer</h1>
      </div>

      {/* form  */}
      <div className="pt-10">
        <div className="">
          <div>
            <InputField
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => changeHandaler("name", e.target.value)}
              placeholder="Enter customer name"
            />
          </div>
          <div>
            <InputField
              label="Email"
              type="email"
              name="email"
              onChange={(e) => changeHandaler("email", e.target.value)}
              value={formData.email}
              placeholder="Enter customer email"
            />
          </div>
          <div>
            <InputField
              label="Phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) => changeHandaler("phone", e.target.value)}
              placeholder="Enter customer number"
            />
          </div>
          <div>
            <InputField
              label="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={(e) => changeHandaler("address", e.target.value)}
              placeholder="Enter customer address"
            />
          </div>
          <div className="pt-5 md:pt-10">
            <SubmitButton
              text="Submit"
              submit={btnLoader}
              onClick={submit}
              className="bg-blue-700 px-7 py-3 w-full md:w-40 rounded text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="md:py-20 py-5">
          <Link
            href="/dashboard/customer/customer-list"
            className="text-blue-600 hover:underline"
          >
            Customer List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
