import React from "react";
import { Box, TextField } from "@material-ui/core";
import { MenuItem } from "material-ui";
import useStyles from "./useStyles";

const layout = (props: any) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.BoxInline} p={1}>
      <Box display={"flex"}>
        {props.children}
      </Box>
    </Box>
  );
};


export default layout;
