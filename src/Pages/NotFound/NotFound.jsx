import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1 className="four-zero-four">404 - Not Found</h1>
        <p>
          The page you are looking for might be under construction or does not
          exist.
        </p>
        <Link to="/">Go back to the home page</Link>
      </div>
    </div>
  );
};

export default NotFound;
