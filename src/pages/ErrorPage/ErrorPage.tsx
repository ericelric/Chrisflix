import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = (): React.JSX.Element => {
  const error = useRouteError();
  const isKnownError = isRouteErrorResponse(error);

  return (
    <div className="error-wrapper">
      <h2>{isKnownError ? error?.status : "Oops! Something went wrong."}</h2>
      <p> {isKnownError ? error.statusText : (error as Error)?.message || "Page not found"}</p>
    </div>
  );
};

export default ErrorPage;
