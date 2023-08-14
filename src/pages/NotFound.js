import { Link } from "react-router-dom";

function NotFound(){
  return (
    <div className="container">
      <h1>Error 404 - Page Not Found</h1>
      <p>
        <Link to="/">Back to Main</Link>
      </p>
    </div>
  )
}

export default NotFound;