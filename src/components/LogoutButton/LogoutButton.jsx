import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast('Successfully logged out.');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Button onClick={handleLogout} className="button--secondary">
      Logout
    </Button>
  );
};

export default LogoutButton;
