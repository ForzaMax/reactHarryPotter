import React from "react";
import { Layout } from "../../layout/Layout/Layout";
import { ShowLiked } from "../../ui/ShowLiked/ShowLiked";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Layout />
      <Link to="/favorites">
        <ShowLiked />
      </Link>
    </>
  );
};
