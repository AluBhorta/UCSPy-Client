import React from "react";
import { Container } from "@material-ui/core";

const AppBody: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <div>{children}</div>
      </Container>
    </>
  );
};

export default AppBody;
