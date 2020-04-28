import React, { Component } from "react";
import { withStyles, TextField } from "@material-ui/core";
import style from "./style";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  onChangeForm = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.keyword);
  };

  render() {
    const { classes } = this.props;
    const { keyword } = this.state;

    return (
      <div className={classes.container}>
        <form onSubmit={this.onSubmitForm}>
          {/* <input></input> */}
          <TextField
            label="Search"
            className={classes.inputForm}
            type="text"
            name="keyword"
            placeholder="nhập từ khóa tìm kiếm..."
            value={keyword}
            onChange={this.onChangeForm}
          />
        </form>
      </div>
    );
  }
}

export default withStyles(style)(SearchBox);
