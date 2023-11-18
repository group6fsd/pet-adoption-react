import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Index";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShowPet from "../pages/Pet";
import ShowCategory from "../pages/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <RegisterPage />,
  },
  {
    path: "/category",
    element: <ShowCategory />,
  },
  {
    path: "/pet",
    element: <ShowPet />,
  },
]);
