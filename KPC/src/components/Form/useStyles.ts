import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const BoxView = {
  display:"flex",
  flexWrap:"wrap",
  width:"100% !important",
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "100%"
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "50ch"
      }
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: "25ch"
    }
  })
);

export default useStyles;
