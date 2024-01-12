import { Favorites } from "../pages/Favorites/Favorites";
import { Home } from "../pages/Home/Home";
import { CharactersProvider } from "../providers/CharactersContext/CharactersProvider";
import { FavoritesProvider } from "../providers/FavoritesContext/FavoritesProvider";
import "./Global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
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

  return (
    <CharactersProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </CharactersProvider>
  );
}

export default App;
