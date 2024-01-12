import React, { useState } from "react";
import style from "./InputBar.module.scss";
import { Input } from "../../ui/Input/Input";
import { Select } from "../../ui/Select/Select";
import { CharactersContext } from "../../providers/CharactersContext/CharactersProvider";
import { useContext } from "react";

export const InputBar = () => {
  const {
    filteredCharacters,
    inputValue,
    onChangeInput,
    characters,
    onChangeSelect,
    schoolValue,
  } = useContext(CharactersContext);

  return (
    <div className={style.input_bar}>
      <div className={style.wrapper}>
        <p className={style.label}>Name</p>
        <Input onChange={onChangeInput} value={inputValue} />
      </div>

      <div className={style.wrapper}>
        <p className={style.label}>School</p>
        <Select
          onChange={onChangeSelect}
          value={schoolValue}
          filteredCharacters={filteredCharacters}
          characters={characters}
        />
      </div>
    </div>
  );
};
