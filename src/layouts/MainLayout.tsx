import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

import "./MainLayout.css";

const MainLayout = (): React.JSX.Element => {
  return (
    <>
      <Header />

      <main className="main-wrapper">
        <ToastContainer />
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
