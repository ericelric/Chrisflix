import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { ToastContainer } from 'react-toastify';

import './MainLayout.css';

const MainLayout = () => {
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
