import React from "react";
import s from "./Header.module.scss";
import { InputBar } from "../../components/InputBar/InputBar";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>Harry Potter</h1>
      <p className={s.subtitle}>
        View all characters from the Harry Potter universe.
      </p>

      <InputBar />
    </header>
  );
};
