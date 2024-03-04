import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "@/pages/sign-in";
import OverviewPage from "@/pages/dashboard/overview";
import Layout from "@/pages/dashboard/layout";

import SignUp from "@/pages/sign-up";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: ":folderId",
        element: <OverviewPage />,
      },
      {
        path: ":folderId/:noteId",
        element: <OverviewPage />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
