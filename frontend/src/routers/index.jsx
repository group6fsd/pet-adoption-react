import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Index";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShowPet from "../pages/Pet";
import Category from "../pages/Category";
import ShowCategoryDog from "../pages/CatergoryDog";
import ShowCategoryCat from "../pages/CategoryCat";

import PetDetail from "../pages/PetDetail";
import FundSuccess from "../pages/FundSuccess";

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
    path: "/pet",
    element: <ShowPet />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/dogs",
    element: <ShowCategoryDog />,
  },
  {
    path: "/cats",
    element: <ShowCategoryCat />,
  },
  {
    path: "/details",
    element: <PetDetail />,
  },
  {
    path: "/fund-success",
    element: <FundSuccess />,
  },
]);
