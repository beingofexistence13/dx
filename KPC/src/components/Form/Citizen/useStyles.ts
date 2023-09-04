import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      padding: 10,
      "& span": {
        color: "red"
      }
    },
    BoxInline: {
      flexDirection: "row",
      display: "flex"
    }
  })
);

export default useStyles;
