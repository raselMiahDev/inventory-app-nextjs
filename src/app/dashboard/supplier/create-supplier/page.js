"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const SubmitButton = dynamic(() =>
  import("../../../../components/common/SubmitButton")
);

const InputField = dynamic(() =>
  import("./../../../../components/common/InputField")
);
const page = () => {
  const [btnLoader, setBtnLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    // Add more validation rules for other fields if needed

    if (Object.keys(errors).length === 0) {
      // Submit the form data or perform further actions
      console.log("Form submitted:", formData);
    } else {
      setErrors(errors);
    }
  };
  return (
    <div className="">
      <div className="bg-slate-800 md:px-10 py-5">
        <h1 className=" text-2xl text-slate-300">Create Supplier</h1>
      </div>

      {/* form  */}
      <div className="pt-10 px-10">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <InputField
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter customer name"
              />
            </div>
            <div>
              <InputField
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
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
                onChange={handleChange}
                placeholder="Enter customer number"
              />
            </div>
            <div>
              <InputField
                label="Address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter customer address"
              />
            </div>
            <div>
              <SubmitButton
                text="Submit"
                submit={btnLoader}
                onClick={handleSubmit}
                className="bg-slate-700 px-7 py-3 w-full md:w-40 rounded-full text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
