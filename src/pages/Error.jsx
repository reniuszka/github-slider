import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Error details:
        <i>
          {error.statusText} - {error.status}
        </i>
      </p>
      <p>{error.data}</p>

      <h3>
        <Link to={"/"}>Go Back Home</Link>
      </h3>
    </div>
  );
}

export default ErrorPage;
