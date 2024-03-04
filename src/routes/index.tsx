import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUpPage from "@/pages/sign-up";
import SignInPage from "@/pages/sign-in";
import OverviewPage from "@/pages/dashboard/overview";
import NoteViewPage from "@/pages/user-dashboard/note-view";

import Layout from "@/pages/dashboard/layout";

const router = createBrowserRouter([
  {
    path: "sign-up",
    element: <SignUpPage />,
  },
  {
    path: "sign-in",
    element: <SignInPage />,
  },
  {
    path: "dashboard",
    element: <Layout />,
    children: [
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "folders",
        element: <OverviewPage />,
        children: [{ path: ":folderId", element: <OverviewPage /> }],
      },
      {
        path: "notes",
        element: <OverviewPage />,
        children: [{ path: ":noteId", element: <NoteViewPage /> }],
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
