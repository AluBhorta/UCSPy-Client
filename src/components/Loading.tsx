import { Box, CircularProgress } from "@material-ui/core";
import React from "react";

const Loading: React.FC = () => {
  return (
    <>
      <Box marginTop={20}>
        <div className="text-center">
          <p>Loading...</p>
          <CircularProgress />
        </div>
      </Box>
    </>
  );
};

export default Loading;
