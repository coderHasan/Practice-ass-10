import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCampaign from "../component/AddCampaign";
import AllCampaign from "../pages/AllCampaign";
import DetailsPage from "../pages/DetailsPage";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/addCampaign"),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "campaing",
        element: <AddCampaign />,
      },
      {
        path: "allCampaign",
        element: <AllCampaign />,
        loader: () => fetch("http://localhost:5000/addCampaign"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <DetailsPage />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addCampaign/${params.id}`),
      },
    ],
  },
]);

export default router;
