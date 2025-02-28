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
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import PlayerPage from './pages/PlayerPage/PlayerPage.jsx';

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
      { path: '/anime', element: <AnimePage />, errorElement: <ErrorPage /> },
      {
        path: '/favorites',
        element: <FavoritesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/player/:id',
        element: <PlayerPage />,
        errorElement: <ErrorPage />,
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
