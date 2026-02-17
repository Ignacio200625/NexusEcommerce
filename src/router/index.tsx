import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayouts";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CategoriesPage from "../pages/CategoriesPage";
import AllProducts from "../pages/Products";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }
    ],
  },
  {
    path: "/Categories",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <CategoriesPage />,
      }
    ],
  },
  {
    path: "/Products",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <AllProducts/>,
      }
    ],
  },
  {
    path: "/cart",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Cart/>,
      }
    ],
  },
]);
