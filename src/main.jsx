
import "aos/dist/aos.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";


import "./styles/index.css"; // path must match your file

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import AboutCutm from "./Aboutcutm.jsx";
import Accomodation from "./Accomodation.jsx";
import Allindustry from "./Allindustry.jsx";
import Allwomen from "./Allwomen.jsx";
import Bestpaper from "./BestPaper.jsx";
import Bestposter from "./Bestposter.jsx";
import ErrorComp from "./ErrorComp.jsx";
import CallForPapers from "./CallForPapers.jsx";
import CameraReadyPaperSubmission from "./CameraReadyPaperSubmission.jsx";
import KeynoteSpeakers from "./KeynoteSpeakers.jsx";
import Patrons from "./Patrons.jsx";
import Penalties from "./Penalties.jsx";
import PublicationAndTemp from "./PublicationAndTemp.jsx";
import Registration from "./Registration.jsx";
import Sponsership from "./Sponsership.jsx";
import WIESpeakers from "./WIESpeakers.jsx";
const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComp />,
    children: [
      {
        index: true,   // ✅ better than path: "/"
        element: <Home />,
      },
       {
        path: "/aboutcutm",
        element: <AboutCutm />,
      },
       {
        path: "/all-industry",
        element: <Allindustry />,
      },
      {
path:"/accomodation",
element: <Accomodation/>,
      },
      { path: "/all-women",
         element: <Allwomen />,
       },
       { path: "/best-paper",
         element: <Bestpaper />,
         },
      { path: "/best-poster",
         element: <Bestposter />,
         },
         {
        path: "/callForPapers",
        element: <CallForPapers />,
      },
      {
        path: "/camera-ready-paper-submission",
        element: <CameraReadyPaperSubmission />,
      },
      {
        path: "/keynote-speakers",
        element: <KeynoteSpeakers />,
      },
       {
        path: "/patrons",
        element: <Patrons />,
      },
      {
        path: "/penalties",
        element: <Penalties />,
      },
      {
        path: "/publication-and-templates",
        element: <PublicationAndTemp />,
      },
       {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/sponsership",
        element: <Sponsership />,
      },

      {
        path: "/wie-speakers",
        element: <WIESpeakers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
