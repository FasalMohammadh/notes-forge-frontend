import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "@/pages/sign-in";
import HomePage from "@/pages/user-dashboard/home";
import Layout from "@/pages/user-dashboard/layout";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
