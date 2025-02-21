import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './reset.css';
import './index.css';
import MainLayout from './layouts/MainLayout';
import AnimePage from './pages/AnimePage/AnimePage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage.jsx';
import TvShowsPage from './pages/TvShowsPage/TvShowsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
      {
        path: '/search',
        element: <SearchResultsPage />,
        errorElement: <ErrorPage />,
      },
      { path: '/movies', element: <MoviesPage />, errorElement: <ErrorPage /> },
      {
        path: '/tv-shows',
        element: <TvShowsPage />,
        errorElement: <ErrorPage />,
      },
      { path: '/Anime', element: <AnimePage />, errorElement: <ErrorPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
