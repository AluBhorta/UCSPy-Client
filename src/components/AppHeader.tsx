import React from "react";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  return (
    <div>
      <h1>AppHeader</h1>
      <Link to="/"> Home </Link>
      <Link to="/solve/config"> Solve </Link>
      <Link to="/plot"> Plot </Link>
      <Link to="/inspect"> Inspect </Link>
      <Link to="/data"> Data </Link>
    </div>
  );
};

export default AppHeader;
