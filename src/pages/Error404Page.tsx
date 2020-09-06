import React from "react";
import { Link } from "react-router-dom";

const Error404Page: React.FC<{
  message?: string;
}> = ({ message }) => {
  return (
    <div>
      <h1>Error 404</h1>
      {message ? <h3>{message}</h3> : <h3>Page not found!</h3>}

      <p>
        If you are lost, go <Link to="/">Home</Link> .
      </p>
    </div>
  );
};

export default Error404Page;
