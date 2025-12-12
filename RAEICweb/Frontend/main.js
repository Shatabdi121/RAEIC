import ReactDOM from "react-dom/client";
import Header from "./src/Header.js";
import Footer from "./src/Footer.js";
import Home from "./src/Home.js";
import Patrons from "./src/Patrons.js";
import CallForPapers from "./src/CallForPapers.js";
import SpecialSession from "./src/SpecialSession.js";
import Attend from "./src/Attend.js";
import SightSeeing from "./src/SightSeeing.js";
import Guideline from "./src/Guideline.js";
import Registration from "./src/Registration.js";
import ErrorComp from "./src/ErrorComp.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Header />
      <Outlet/>
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
        path: "/",
        element: <Home />,
      },
      {
        path: "/callForPapers",
        element: <CallForPapers />,
      },
      {
        path: "/specialSession",
        element: <SpecialSession />,
      },
      {
        path: "/guidelines",
        element: <Guideline/>,
      },
      {
        
        path: "/attend",
        element: <Attend />,
      },
      {
        path: "/patrons",
        element: <Patrons />,
      },
      {
        path: "/sightSeeing",
        element: <SightSeeing />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },

    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// createRoot (rootElement) is a React utility function used to create a react root element,
// which is a DOM element in which UI components render themselves.
// It takes as a parameter the root element that should be created.
root.render(<RouterProvider router={AppRouter} />);
// It is a function we can use to define the HTML code within the HTML element
