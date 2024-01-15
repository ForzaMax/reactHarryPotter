import React from "react";
import s from "./Card.module.scss";
import defaultImg from "../../assets/who.png";
import { FavouriteButton } from "../../ui/FavouriteButton/FavouriteButton";
import { useContext } from "react";
import { FavoritesContext } from "../../providers/FavoritesContext/FavoritesProvider";

export const Card = React.memo(
  ({ name, actor, house, gender, image, alive, wand, id }) => {
    const {
      favorites,
      setFavorites,
      addFavorites,
      removeFavorites,
      isFavorite,
    } = useContext(FavoritesContext);

    const favActive = isFavorite(id);

    console.log({ id });

    function toggleFavorite() {
      if (isFavorite(id)) {
        removeFavorites(id);
      } else {
        addFavorites(id);
      }
    }

    return (
      <div className={s.card}>
        <img
          className={s.card__image}
          src={image ? image : defaultImg}
          alt=""
        />
        <FavouriteButton active={favActive} onClick={toggleFavorite} id={id} />
        <div className={s.card__info}>
          <p className={s.card__name}>{name}</p>
          <p className={s.card__desc}>{actor ? `Actor: ${actor}` : ""}</p>
          <p className={s.card__desc}>{gender ? `Gender: ${gender}` : ""}</p>
          <p className={s.card__desc}>{house ? `House: ${house}` : ""}</p>
          <p className={s.card__desc}>
            {wand.core ? `Wand core: ${wand.core}` : ""}
          </p>
          <p className={s.card__desc}>
            {alive ? "Alive: alive" : "Alive: dead"}
          </p>
        </div>
      </div>
    );
  }
);
