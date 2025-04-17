import { useState, useContext, useEffect, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginSignUpForm from "../../components/LoginSignUpForm/LoginSignUpForm";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const LogInSignUpPage = (): React.JSX.Element => {
  const { signup, login, forgotPassword } = useContext(AuthContext)!;
  const location = useLocation();
  const navigate = useNavigate();

  const [isSignupMode, setIsSignupMode] = useState<boolean>(location.pathname === "/signup");
  const [isLogInMode, setIsLogInMode] = useState<boolean>(location.pathname === "/login");
  const [isResetMode, setIsResetMode] = useState<boolean>(location.pathname === "/reset-password");

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsSignupMode(location.pathname === "/signup");
    setIsLogInMode(location.pathname === "/login");
    setIsResetMode(location.pathname === "/reset-password");
  }, [location.pathname]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (isResetMode) {
      try {
        setIsLoading(true);
        await forgotPassword(email);
        toast.success("Password reset link sent!");
        navigate("/login");
      } catch (err) {
        if (err instanceof Error) {
          toast.error(`Failed to send reset link. ${err.message}`);
        } else {
          toast.error("Failed to send reset link.");
        }
      } finally {
        setIsLoading(false);
      }
      return;
    }

    if (isSignupMode && password !== passwordRepeat) {
      toast.error("Ups! Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);
      if (isSignupMode) {
        await signup(email, password, username);
        toast.success("Account created successfully.");
        navigate("/");
      } else {
        await login(email, password);
        toast.success("Logged in successfully.");
        navigate("/");
      }
    } catch (err) {
      if (typeof err === "object" && err !== null && "code" in err && "message" in err) {
        if (err.code === "auth/invalid-credential") {
          toast.error(`Login failed. Please double-check your email and password.`);
        } else {
          toast.error(`Failed to ${isSignupMode ? "sign up" : "log in"}. ${err.message}`);
        }
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleMode = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const newMode = !isSignupMode;
    setIsSignupMode(newMode);
    navigate(newMode ? "/signup" : "/login");
  };

  const handleForgotPassword = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsResetMode(true);
    setIsSignupMode(false);
    navigate("/reset-password");
  };

  const handleGoBackToLogin = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsResetMode(false);
    navigate("/login");
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
