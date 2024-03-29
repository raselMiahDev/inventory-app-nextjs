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
        <h1 className=" text-2xl text-slate-300">Create Expense Type</h1>
      </div>

      {/* form  */}
      <div className="pt-10 px-10 grid grid-cols-2 gap-10">
        <form onSubmit={handleSubmit}>
          <div>
            <InputField
              label="Expense Type"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Categoris name"
            />
          </div>
          <div className="pt-5">
            <SubmitButton
              text="Submit"
              submit={btnLoader}
              onClick={handleSubmit}
              className="bg-slate-700 px-7 py-3 w-full md:w-40 rounded-full text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>

        {/* Brand List  */}
        <div>
          <h1>Expense Type List</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
