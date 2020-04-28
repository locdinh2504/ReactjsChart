import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import ListItems from "../ListItems";
import style from "./style";

class App extends Component {
  render() {
    const { classes } = this.props;

    return <ListItems></ListItems>;
  }
}

export default withStyles(style)(App);

// pagination theo id

{
  /* <div className={classes.pageText}>Trang : {page}</div>
<ul className={classes.container}>{renderNumberPagination}</ul>


constructor(props) {
  super(props);
  this.state = {
    page: 1,
    rowsPerPage: 5
  };
}

onClickPagination = e => {
  console.log(e.target.id);
  this.setState({
    page: Number(e.target.id)
  });
};

const { page, setPage, rowsPerPage, setRowsPerPage } = this.state;
    const indexOfLastdata = page * rowsPerPage;
    const indexOfFirstdata = indexOfLastdata - rowsPerPage;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / rowsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderNumberPagination = pageNumbers.map(number => {
      return (
        

        <li className={classes.listPagination}>
          <button
            id={number}
            key={pageNumbers}
            onClick={this.onClickPagination}
            className={classes.buttonPagination}
          >
            {number}
          </button>
        </li>
      );
    }); 
    
    {(rowsPerPage > 0
              ? data.slice(indexOfFirstdata, indexOfLastdata)
              : data
            ).map((items, index) => {
    */
}
