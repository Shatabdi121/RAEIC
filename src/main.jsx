
import "aos/dist/aos.css";

import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./styles/index.css"; // path must match your file

import App, { Loading } from "./App.jsx";
import ErrorComp from "./ErrorComp.jsx";

const lazyPage = (loadPage) => async () => {
  const { default: Component } = await loadPage();
  return { Component };
};

const AppRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    HydrateFallback: Loading,
    errorElement: <ErrorComp />,
    children: [
      {
        index: true,   // ✅ better than path: "/"
        lazy: lazyPage(() => import("./Home.jsx")),
      },
       {
        path: "/aboutcutm",
        lazy: lazyPage(() => import("./AboutCutm.jsx")),
      },
       {
        path: "/all-industry",
        lazy: lazyPage(() => import("./Allindustry.jsx")),
      },
      {
path:"/accomodation",
lazy: lazyPage(() => import("./Accomodation.jsx")),
      },
      { path: "/all-women",
         lazy: lazyPage(() => import("./Allwomen.jsx")),
       },
       { path: "/best-paper",
         lazy: lazyPage(() => import("./Bestpaper.jsx")),
         },
      { path: "/best-poster",
         lazy: lazyPage(() => import("./Bestposter.jsx")),
         },
         {
        path: "/callForPapers",
        lazy: lazyPage(() => import("./CallForPapers.jsx")),
      },
      {
        path: "/camera-ready-paper-submission",
        lazy: lazyPage(() => import("./CameraReadyPaperSubmission.jsx")),
      },
      {
        path: "/keynote-speakers",
        lazy: lazyPage(() => import("./KeynoteSpeakers.jsx")),
      },
       {
        path: "/patrons",
        lazy: lazyPage(() => import("./Patrons.jsx")),
      },
      {
        path: "/penalties",
        lazy: lazyPage(() => import("./Penalties.jsx")),
      },
      {
        path: "/publication-and-templates",
        lazy: lazyPage(() => import("./PublicationAndTemp.jsx")),
      },
       {
        path: "/registration",
        lazy: lazyPage(() => import("./Registration.jsx")),
      },
      {
        path: "/sponsership",
        lazy: lazyPage(() => import("./Sponsership.jsx")),
      },

      {
        path: "/wie-speakers",
        lazy: lazyPage(() => import("./WIESpeakers.jsx")),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
