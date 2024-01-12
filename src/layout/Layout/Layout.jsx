import React from "react";
import { useContext } from "react";
import { Container } from "../Container/Container";
import { Header } from "../Header/Header";
import s from "./Layout.module.scss";
import { CharactersContext } from "../../providers/CharactersContext/CharactersProvider";
import { Card } from "../../components/Card/Card";

export const Layout = () => {
  const { characters, filteredCharacters } = useContext(CharactersContext);

  return (
    <Container>
      <Header></Header>
      <main className={s.main}>
        {filteredCharacters.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              actor={character.actor}
              house={character.house}
              gender={character.gender}
              image={character.image}
              alive={character.alive}
              wand={character.wand}
            />
          );
        })}
      </main>
    </Container>
  );
};
