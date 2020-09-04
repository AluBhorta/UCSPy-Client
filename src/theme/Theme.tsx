import React from "react";
import { ThemeProvider } from "@material-ui/core";

const Theme: React.FC = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={""}>{children}</ThemeProvider>
    </div>
  );
};

export default Theme;
