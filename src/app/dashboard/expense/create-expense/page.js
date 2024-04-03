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
    typeID: "",
    amount: "",
    note: "",
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
      <div className="md:px-10 py-5">
        <h1 className=" text-2xl text-slate-600">Create expense</h1>
      </div>

      {/* form  */}
      <div className="pt-10 px-10">
        <form onSubmit={handleSubmit}>
          <div className="">
            <div>
              <SelectField
                label="Expense"
                name="typeID"
                value={formData.typeID}
                onChange={handleChange}
              />
            </div>

            <div>
              <InputField
                label="Amount"
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
              />
            </div>

            <div>
              <InputField
                label="Note"
                type="text"
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Enter note"
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
