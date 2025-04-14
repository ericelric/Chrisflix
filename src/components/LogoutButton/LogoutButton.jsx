import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      toast('Successfully logged out.');
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleLogout} className="button--secondary">
      {isLoading ? 'Logging Out...' : 'Logout'}
    </Button>
  );
};

export default LogoutButton;
