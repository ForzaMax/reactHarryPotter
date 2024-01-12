import React from "react";
import s from "./Favorites.module.scss";
import { CharactersContext } from "../../providers/CharactersContext/CharactersProvider";
import { FavoritesContext } from "../../providers/FavoritesContext/FavoritesProvider";
import { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { Container } from "../../layout/Container/Container";

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const { characters } = useContext(CharactersContext);

  const favoritesList = characters.filter((character) => {
    return favorites.includes(character.id);
  });

  return (
    <Container>
      <Link to="/">
        <p className={s.link}>← Back To All</p>
      </Link>

      <h1 className={s.title}>Liked ones</h1>
      <p className={s.subtitle}>
        Your favorite characters from the Harry Potter universe.
      </p>

      <main className={s.main}>
        {favoritesList.map((character) => {
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
