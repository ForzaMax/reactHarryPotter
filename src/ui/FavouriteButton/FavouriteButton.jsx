import React from "react";
import s from "./FavouriteButton.module.scss";
import likeActiveImg from "../../assets/like-active.svg";
import likeUnactiveImg from "../../assets/like-unactive.svg";

export const FavouriteButton = ({ onClick, id, active }) => {
  
  return (
    <button onClick={onClick} className={s.button}>
      <img src={active ? likeActiveImg : likeUnactiveImg} alt="" />
    </button>
  );
};
