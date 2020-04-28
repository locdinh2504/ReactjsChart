const style = theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  },
  pagination: {
    display: "flex",
    float: "right"
  },
  pagination_li: {
    listStyle: "none",
    margin: 1
  },
  active: {
    "&:focus": {
      color: "#fff",
      cursor: "pointer",
      backgroundColor: "#337ab7",
      borderColor: "#337ab7"
    },
    position: "relative",
    float: "right",

    marginLeft: -1,
    lineHeight: 1.42857143,
    color: "#337ab7",
    textDecoration: "none",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    outline: 0
  }
});

export default style;
