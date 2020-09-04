import React from "react";

const Error404Page: React.FC<{
  message?: string;
}> = ({ message }) => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>
        Page not found! If you are lost, go <a href="/">Home</a>.{" "}
      </p>
      <p>{message}</p>
    </div>
  );
};

export default Error404Page;
