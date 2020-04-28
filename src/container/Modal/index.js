import { Grid, Modal, withStyles, Box, Button } from "@material-ui/core";

import React, { Component } from "react";
import style from "./style";

class CommandModal extends Component {
  render() {
    const {
      open,
      classes,
      onClose,
      title,
      formContent,
      formChart,
    } = this.props;
    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
          <Grid item md={12} className={classes.Sub}>
            <span>{title}</span>
          </Grid>
          <div className={classes.content}>{formContent}</div>
        </div>
      </Modal>
    );
  }
}

export default withStyles(style)(CommandModal);
