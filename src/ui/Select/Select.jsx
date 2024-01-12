import React from "react";
import s from "./Select.module.scss";

export const Select = ({ characters, onChange, value }) => {
  const uniqueHouses = Array.from(
    new Set(characters.map((character) => character.house))
  ).filter((house) => house);

  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleSelectChange} value={value} className={s.select}>
      <option value="All">All</option>
      {uniqueHouses.map((house) => (
        <option key={house} value={house}>
          {house}
        </option>
      ))}
    </select>
  );
};


