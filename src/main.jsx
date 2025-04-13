import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
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
import LogInSignUpPage from './pages/LogInSignUpPage/LogInSignUpPage.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';

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
        path: '/player/:id',
        element: <PlayerPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/login',
        element: <LogInSignUpPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/signup',
        element: <LogInSignUpPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/reset-password',
        element: <LogInSignUpPage />,
        errorElement: <ErrorPage />,
      },
      { path: '*', element: <ErrorPage /> },

      // PROTECTED ROUTES
      {
        path: '/favorites',
        element: (
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
