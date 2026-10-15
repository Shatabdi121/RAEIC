import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export const Loading = () => (
  <main className="min-h-screen grid place-items-center text-slate-600">
    Loading conference information...
  </main>
);

const App = () => (
  <div className="min-h-screen bg-white text-slate-800 font-sans">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default App;
