import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../pages/Layout";
import Popular from "../pages/Popular/Popular";
import NotFound from "../pages/NotFound/NotFound";
import People from "../pages/People";
import SinglePage from "../pages/SinglePage";
import ActorsPage from "../pages/ActorsPage";
import Upcoming from "../pages/Upcoming";
import NowPlaying from "../pages/NowPlaying";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Layout />, // HOME PAGE
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/nowplaying",
        element: <NowPlaying />,
      },
    ],
  },
  {
    path: "/movie/details/:id",
    element: <SinglePage />,
  },
  {
    path: "/actors/info/:id",
    element: <ActorsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
