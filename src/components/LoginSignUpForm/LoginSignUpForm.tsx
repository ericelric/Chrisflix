import "./LoginSignUpForm.css";
import Button from "../Button/Button";

interface LoginSignUpFormProps {
  isSignupMode: boolean;
  isLogInMode: boolean;
  isResetMode: boolean;
  username: string;
  setUsername: (username: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  passwordRepeat: string;
  setPasswordRepeat: (passwordRepeat: string) => void;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleToggleMode: () => void;
  handleForgotPassword: () => void;
  handleGoBackToLogin: () => void;
}

const LoginSignUpForm = ({
  isSignupMode,
  isLogInMode,
  isResetMode,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  passwordRepeat,
  setPasswordRepeat,
  isLoading,
  handleSubmit,
  handleToggleMode,
  handleForgotPassword,
  handleGoBackToLogin,
}: LoginSignUpFormProps): React.JSX.Element => {
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <div className="signup__card">
        <h1 className="signup__title">
          {isResetMode ? "Reset Password" : isSignupMode ? "Sign Up" : "Log In"}
        </h1>

        {isSignupMode && (
          <div className="signup__input-group">
            <input
              id="username"
              className="signup__input"
              type="text"
              name="username"
              required
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" "
              aria-label="Username"
            />
            <label className="signup__label" htmlFor="username">
              Username
            </label>
          </div>
        )}
        <div className="signup__input-group">
          <input
            id="email"
            className="signup__input"
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            aria-label="Email"
          />
          <label className="signup__label" htmlFor="email">
            Email
          </label>
        </div>

        {!isResetMode && (
          <>
            <div className="signup__input-group">
              <input
                id="password"
                className="signup__input"
                type="password"
                name="password"
                required
                autoComplete={isSignupMode ? "new-password" : "current-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                aria-label="Password"
              />
              <label className="signup__label" htmlFor="password">
                Password
              </label>
            </div>

            {isSignupMode && (
              <div className="signup__input-group">
                <input
                  id="passwordRepeat"
                  className="signup__input"
                  type="password"
                  name="passwordRepeat"
                  required
                  autoComplete="new-password"
                  value={passwordRepeat}
                  onChange={(e) => setPasswordRepeat(e.target.value)}
                  placeholder=" "
                  aria-label="Repeat Password"
                />
                <label className="signup__label" htmlFor="passwordRepeat">
                  Repeat Password
                </label>
              </div>
            )}
          </>
        )}

        <div className="signup__actions">
          <Button disabled={isLoading} type="submit" aria-busy={isLoading}>
            {isLoading
              ? isResetMode
                ? "Sending Reset Link..."
                : isSignupMode
                ? "Signing Up..."
                : "Logging In..."
              : isResetMode
              ? "Reset Password"
              : isSignupMode
              ? "Sign Up"
              : "Log In"}
          </Button>
        </div>

        <hr className="signup__divider" />

        {!isResetMode && (
          <button
            type="button"
            className="signup__toggle"
            onClick={handleToggleMode}
            aria-label={isSignupMode ? "Switch to Login Mode" : "Switch to Sign Up Mode"}
          >
            {isSignupMode ? "Already have an account? Log In" : "Don't have an account? Sign Up "}
          </button>
        )}

        {isLogInMode && (
          <button
            className="signup__forgot"
            onClick={handleForgotPassword}
            aria-label="Forgot Password"
          >
            Forgot Password?
          </button>
        )}

        {isResetMode && (
          <button
            type="button"
            className="signup__toggle"
            onClick={handleGoBackToLogin}
            aria-label="Go back to Login Form"
          >
            Go back to Login
          </button>
        )}
      </div>
    </form>
  );
};

export default LoginSignUpForm;
