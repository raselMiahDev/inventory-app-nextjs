import React from "react";

const InputField = (props) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>

      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-md focus:border-blue-500 focus:ring-blue-500  dark:bg-slate-100 dark:border-gray-200 dark:text-gray-400 dark:focus:ring-gray-300"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
