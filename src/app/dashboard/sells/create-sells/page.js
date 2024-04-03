"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const SubmitButton = dynamic(() =>
  import("../../../../components/common/SubmitButton")
);
const InputField = dynamic(() =>
  import("./../../../../components/common/InputField")
);
const SelectField = dynamic(() =>
  import("./../../../../components/common/SelectField")
);
const page = () => {
  const [btnLoader, setBtnLoader] = useState(false);
  const [formData, setFormData] = useState({
    brandID: "",
    categoryID: "",
    productName: "",
    unit: "",
    details: "",
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
      <div className=" md:px-10 py-5">
        <h1 className=" text-2xl text-slate-700">Create customer</h1>
      </div>

      {/* form  */}
      <div className="pt-10 px-10">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <SelectField
                label="Brand Name"
                name="brandID"
                value={formData.brandID}
                onChange={handleChange}
              />
            </div>
            <div>
              <SelectField
                label="Brand Name"
                name="brandID"
                value={formData.brandID}
                onChange={handleChange}
              />
            </div>
            <div>
              <InputField
                label="Product Name"
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Enter customer number"
              />
            </div>

            <div>
              <InputField
                label="Unit"
                type="text"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                placeholder="Enter customer number"
              />
            </div>

            <div>
              <InputField
                label="Details"
                type="text"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Enter customer number"
              />
            </div>
            <br />
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
