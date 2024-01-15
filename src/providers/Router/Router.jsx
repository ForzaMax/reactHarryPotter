import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

export const Router = () => {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/favorites",
      element: <Favorites />,
    },

    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);



}
