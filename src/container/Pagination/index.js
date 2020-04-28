import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      pageLimit: "",
      initialPage: "",
      pageToShow: "",
      currentPage: "",
      totalPages: ""
    };
  }
  componentDidMount() {
    this.setState({
      totalRecords: this.props.totalRecords,
      pageLimit: this.props.pageLimit || 10,
      totalPages: Math.ceil(this.props.totalRecords / this.props.pageLimit),
      pageToShow: this.props.pageToShow || 5,
      currentPage: this.props.initialPage || 1
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      totalRecords: nextProps.totalRecords,
      pageLimit: nextProps.pageLimit || 10,
      totalPages: Math.ceil(nextProps.totalRecords / nextProps.pageLimit),
      pageToShow: nextProps.pageToShow || 5
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.totalRecords !== prevState.totalRecords ||
      this.state.pageLimit !== prevState.pageLimit
    ) {
      this.setPage(this.state.currentPage);
    }
  }

  setPage = page => {
    var { totalPages, pageLimit, totalRecords } = this.state;
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }

    this.setState({
      currentPage: page
    });

    var starIndex = (page - 1) * pageLimit;
    var endIndex = Math.min(starIndex + pageLimit - 1, totalRecords - 1);

    this.props.onChangePage({
      pageLimit,
      page,
      totalPages,
      starIndex,
      endIndex
    });
  };

  getPager() {
    var { pageToShow, currentPage, totalPages } = this.state;
    var pages = [],
      startFromNumber;

    if (totalPages <= pageToShow) {
      startFromNumber = 1;
      pageToShow = totalPages;
    } else {
      if (currentPage <= Math.ceil(pageToShow / 2)) {
        startFromNumber = 1;
      } else if (currentPage + Math.floor((pageToShow - 1) / 2) >= totalPages) {
        startFromNumber = totalPages - (pageToShow - 1);
      } else {
        startFromNumber = currentPage - Math.floor(pageToShow / 2);
      }
    }
    for (let i = 1; i <= pageToShow; i++) {
      pages.push(startFromNumber++);
    }

    return {
      currentPage,
      totalPages,
      pages
    };
  }

  render() {
    const { classes, page } = this.props;
    if (!this.state.totalRecords || this.state.totalPages === 1) return null;

    var pager = this.getPager();

    return (
      <ul className={classes.pagination}>
        <li className={classes.pagination_li}>
          <button
            className={classes.active}
            disabled={pager.currentPage === 1 ? true : false}
            onClick={() => this.setPage(1)}
          >
            Đầu
          </button>
        </li>
        <li className={classes.pagination_li}>
          <button
            disabled={pager.currentPage === 1 ? true : false}
            className={classes.active}
            onClick={() => this.setPage(pager.currentPage - 1)}
          >
            Sau
          </button>
        </li>

        {pager.pages.map((page, index) => (
          <li key={index} className={classes.pagination_li}>
            <button
              className={classes.active}
              onClick={() => this.setPage(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li className={classes.pagination_li}>
          <button
            className={classes.active}
            disabled={pager.currentPage === pager.totalPages ? true : false}
            onClick={() => this.setPage(pager.currentPage + 1)}
          >
            Tiếp
          </button>
        </li>
        <li className={classes.pagination_li}>
          <button
            className={classes.active}
            disabled={pager.currentPage === pager.totalPages ? true : false}
            onClick={() => this.setPage(pager.totalPages)}
          >
            Cuối
          </button>
        </li>
      </ul>
    );
  }
}

export default withStyles(style)(Pagination);
