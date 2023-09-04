import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1
  }
}));

export default function ComplexGrid(props: any) {
  const classes = useStyles();

  return (
    <div {...props} className={classes.root}>
      {props.children}
    </div>
  );
}
