import type { RouteObject } from "react-router-dom";
// Layout
import MainLayout from "../layout/MainLayout.tsx";
// Pages
import Index from "../pages/Index.tsx";
import Home from "../pages/Home/Home.tsx";
import Wishlist from "../pages/wishlist/Wishlist.tsx";
import Cart from "../pages/cart/Cart.tsx";
import PetDetailsPage from "../pages/pet-details/PetDetailsPage.tsx";
// Error Page
import ErrorPage from "../pages/error-page/ErrorPage.tsx";
import Purchase from "../pages/purchase/Purchase.tsx";

// Routes
const router: RouteObject[] = [
  // Nested Routes
  {
    element: <MainLayout />,
    children: [
      {
        element: <Index />,
        index: true,
      },
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Wishlist />,
        path: "/wishlist",
      },
      {
        element: <Cart />,
        path: "/cart",
      },
      {
        element: <Purchase />,
        path: "/purchase",
      },

      // dynamic
      {
        element: <PetDetailsPage />,
        path: "/pet-details/:id",
      },
      {},
    ],
  },

  // Error Handling Routes
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
