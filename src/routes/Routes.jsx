import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCampaign from "../component/AddCampaign";
import AllCampaign from "../pages/AllCampaign";
import DetailsPage from "../pages/DetailsPage";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../pages/ErrorPage";
import MyDonate from "../pages/MyDonate";
import auth from "../utils/firbase/firbase.init";
import MyCampaign from "../pages/MyCampaign";
import Update from "../pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://donation-app-seven.vercel.app/addCampaign"),
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
        element: (
          <PrivetRoute>
            <AddCampaign />
          </PrivetRoute>
        ),
      },
      {
        path: "allCampaign",
        element: <AllCampaign />,
        loader: () =>
          fetch("https://donation-app-seven.vercel.app/addCampaign"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <DetailsPage />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://donation-app-seven.vercel.app/addCampaign/${params.id}`
          ),
      },
      {
        path: "/myDonate",
        element: (
          <PrivetRoute>
            <MyDonate />
          </PrivetRoute>
        ),
      },
      {
        path: "/myCampaign",
        element: <MyCampaign />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(
            `https://donation-app-seven.vercel.app/addCampaign/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
