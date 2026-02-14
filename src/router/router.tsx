import type { RouteObject } from "react-router-dom";
// Layout
import MainLayout from "../layout/MainLayout.tsx";
// Pages

// Error Page
import ErrorPage from "../pages/error-page/ErrorPage.tsx";
import Index from "../pages/Index.tsx";

const router: RouteObject[] = [
  // Nested Routes
  {
    element: <MainLayout />,
    children: [
      {
        element: <Index />,
        index: true,
      },
    ],
  },

  // Error Handling Routes
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
