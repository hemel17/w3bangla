import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Html from "../pages/Html/Html";
import Css from "../pages/Css/Css";
import JavaScript from "../pages/JavaScript/JavaScript";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/html",
        element: <Html />,
      },
      {
        path: "/css",
        element: <Css />,
      },
      {
        path: "/javascript",
        element: <JavaScript />,
      },
    ],
  },
]);

export default router;
