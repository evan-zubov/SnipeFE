import React from "react";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";

export const Search = () => (
  <Box>
    <TextField
      fullWidth
      id="outlined-search"
      label="Search"
      type="search"
      variant="outlined"
    />
  </Box>
);
