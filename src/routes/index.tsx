import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUp from "@/pages/sign-up";
import SignInPage from "@/pages/sign-in";
import Layout from "@/pages/dashboard/layout";
import OverviewPage from "@/pages/dashboard/overview";
import NoteViewPage from "@/pages/user-dashboard/note-view";

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
        path: "/:folderId/:noteId",
        element: <NoteViewPage />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
