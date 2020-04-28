const style = (theme) => ({
  paper: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    border: "1px solid black",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  Sub: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    marginBottom: 20,
  },
});

export default style;
