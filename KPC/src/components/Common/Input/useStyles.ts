import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      // padding: 10,
      "& span": {
        color: "red"
      }
    },
    BoxInline: {
      flexDirection: "row",
      display: "flex"
    },
    BoxText: {
      display: 'flex',
      // alignItems: 'center !important',
      marginTop: '8px',
      "& span": {
        color: "red",
        paddingLeft: 5
      }
    }
  })
);

export default useStyles;
