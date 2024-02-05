import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "@/pages/sign-in";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
