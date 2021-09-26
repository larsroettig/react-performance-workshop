import React from "react";

const FormComponent = ({ dog, onChange }) => {
  return (
    <div>
      <br />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={dog}
        onChange={(e) => onChange(e.target.value)}
      />
      <p>{dog ? `${dog}` : ""}</p>
    </div>
  );
};

export default FormComponent;
