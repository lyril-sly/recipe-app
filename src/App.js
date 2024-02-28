import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipes from "./Pages/recipes";
import NavBar from "./component/navbar";
import Recipe from "./Pages/recipe";

const router = createBrowserRouter([
  {path: "/", element: <Recipes/>},
  {path: "/recipe", element: <Recipe/>},
  {path: "/recipes/:id", element: <Recipe/>}
]);

function App() {
  return (
    <>
    <NavBar/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
