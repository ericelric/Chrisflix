import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  return currentUser ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
