import './LoginSignUpForm.css';
import Button from '../Button/Button';

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
}) => {
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <div className="signup__container">
        <h1 className="signup__title">
          {isResetMode ? 'Reset Password' : isSignupMode ? 'Sign Up' : 'Log In'}
        </h1>

        {isSignupMode && (
          <div className="signup__input-group">
            <input
              id="username"
              className="signup__input"
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" "
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
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
                  value={passwordRepeat}
                  onChange={(e) => setPasswordRepeat(e.target.value)}
                  placeholder=" "
                />
                <label className="signup__label" htmlFor="passwordRepeat">
                  Repeat Password
                </label>
              </div>
            )}
          </>
        )}

        <div className="signup__actions">
          <Button disabled={isLoading} type="submit">
            {isLoading
              ? isResetMode
                ? 'Sending Reset Link...'
                : isSignupMode
                ? 'Signing Up...'
                : 'Logging In...'
              : isResetMode
              ? 'Reset Password'
              : isSignupMode
              ? 'Sign Up'
              : 'Log In'}
          </Button>
        </div>

        <hr className="signup__divider" />

        {!isResetMode && (
          <button
            type="button"
            className="signup__toggle"
            onClick={handleToggleMode}
          >
            {isSignupMode
              ? 'Already have an account? Log In'
              : "Don't have an account? Sign Up "}
          </button>
        )}

        {isLogInMode && (
          <button className="signup__forgot" onClick={handleForgotPassword}>
            Forgot Password?
          </button>
        )}

        {isResetMode && (
          <button
            type="button"
            className="signup__toggle"
            onClick={handleGoBackToLogin}
          >
            Go back to Login
          </button>
        )}
      </div>
    </form>
  );
};

export default LoginSignUpForm;
