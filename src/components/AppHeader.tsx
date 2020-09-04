import React from "react";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  return (
    <div>
      <h1>AppHeader</h1>
      <Link to="/"> Home </Link>
      <Link to="/data"> Data </Link>
    </div>
  );
};

export default AppHeader;
