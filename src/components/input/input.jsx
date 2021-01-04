import React from "react";

import "./input.scss";

export const Input = ({ label, type, value, onChange}) => {
  return (
    <div className="input-cont">
      <input onChange={onChange} type={type ? type : "text"} value={value} className="input-field" placeholder={label} />
      <label className="input-label">{label}</label>
    </div>
  );
};
