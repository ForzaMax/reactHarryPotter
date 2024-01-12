import React from "react";
import s from "./Input.module.scss";

export const Input = ({ value, onChange }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className={s.input}
      type="text"
      placeholder="Hermione"
    ></input>
  );
};
