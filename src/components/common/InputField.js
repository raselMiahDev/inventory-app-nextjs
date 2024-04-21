import React from "react";

const InputField = (props) => {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {props.label}
      </label>

      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="border p-3 rounded-md focus:border-blue-400 focus:outline-none w-full"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
