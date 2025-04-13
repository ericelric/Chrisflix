import { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginSignUpForm from '../../components/LoginSignUpForm/LoginSignUpForm';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';

const LogInSignUpPage = () => {
  const { signup, login, forgotPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [isSignupMode, setIsSignupMode] = useState(
    location.pathname === '/signup'
  );
  const [isLogInMode, setIsLogInMode] = useState(
    location.pathname === '/login'
  );
  const [isResetMode, setIsResetMode] = useState(
    location.pathname === '/reset-password'
  );

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsSignupMode(location.pathname === '/signup');
    setIsLogInMode(location.pathname === '/login');
    setIsResetMode(location.pathname === '/reset-password');
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isResetMode) {
      try {
        setIsLoading(true);
        await forgotPassword(email);
        toast.success('Password reset link sent!');
        navigate('/login');
      } catch (err) {
        toast.error(`Failed to send reset link. ${err.message}`);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    if (isSignupMode && password !== passwordRepeat) {
      toast.error('Ups! Passwords do not match.');
      return;
    }

    try {
      setIsLoading(true);
      if (isSignupMode) {
        await signup(email, password, username);
        toast.success('Account created successfully.');
        navigate('/');
      } else {
        await login(email, password);
        toast.success('Logged in successfully.');
        navigate('/');
      }
    } catch (err) {
      if (err.code === 'auth/invalid-credential') {
        toast.error(
          `Login failed. Please double-check your email and password.`
        );
      } else {
        toast.error(
          `Failed to ${isSignupMode ? 'sign up' : 'log in'}. ${err.message}`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleMode = () => {
    const newMode = !isSignupMode;
    setIsSignupMode(newMode);
    navigate(newMode ? '/signup' : '/login');
  };

  const handleForgotPassword = () => {
    setIsResetMode(true);
    setIsSignupMode(false);
    navigate('/reset-password');
  };

  const handleGoBackToLogin = () => {
    setIsResetMode(false);
    navigate('/login');
  };

  return (
    <LoginSignUpForm
      isSignupMode={isSignupMode}
      isLogInMode={isLogInMode}
      isResetMode={isResetMode}
      isLoading={isLoading}
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      passwordRepeat={passwordRepeat}
      setPasswordRepeat={setPasswordRepeat}
      handleSubmit={handleSubmit}
      handleToggleMode={handleToggleMode}
      handleForgotPassword={handleForgotPassword}
      handleGoBackToLogin={handleGoBackToLogin}
    />
  );
};

export default LogInSignUpPage;
