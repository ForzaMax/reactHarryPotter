import React from "react";
import { createContext, useState, useEffect } from "react";

export const CharactersContext = createContext(null);

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [inputValue, setValue] = useState("");
  const [schoolValue, setSchoolValue] = useState("All");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .finally(() => console.log(characters));
  }, [inputValue, schoolValue]);

  function onChangeInput(e) {
    setValue(e.target.value);
  }
  const onChangeSelect = (value) => {
    setSchoolValue(value);
  };

  const filteredCharacters = characters
    .filter(
      (character) => schoolValue === "All" || character.house === schoolValue
    )
    .filter((character) =>
      character.name.toLowerCase().includes(inputValue.toLowerCase())
    );

  const value = {
    filteredCharacters,
    characters,
    onChangeInput,
    onChangeSelect,
    inputValue,
    schoolValue,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
