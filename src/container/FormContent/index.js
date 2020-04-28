import { Grid, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { Box, Button } from "@material-ui/core";
import style from "./style";

class FormContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.random().toString(),
      name: "",
      calo: "",
      fat: "",
      carb: "",
      protein: "",
    };
  }
  componentWillMount() {
    if (this.props.taskEditing) {
      this.setState({
        id: this.props.taskEditing.id,
        name: this.props.taskEditing.name,
        calo: this.props.taskEditing.calo,
        fat: this.props.taskEditing.fat,
        carb: this.props.taskEditing.carb,
        protein: this.props.taskEditing.protein,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps && nextProps.taskEditing) {
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        calo: nextProps.taskEditing.calo,
        fat: nextProps.taskEditing.fat,
        carb: nextProps.taskEditing.carb,
        protein: nextProps.taskEditing.protein,
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmitEdit(this.state);
  };

  render() {
    const { classes, onClose, taskEditing } = this.props;

    const { name, calo, fat, carb, protein } = this.state;
    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
        <Grid container spacing={2} xs={12}>
          <Grid item md={12}>
            <TextField
              className={classes.dessert}
              id="filled-search"
              type="search"
              variant="outlined"
              label="Dessert(100g serving)"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              variant="outlined"
              label="Calories"
              id="standard-number"
              type="number"
              name="calo"
              value={calo}
              onChange={this.onChange}
            ></TextField>
          </Grid>
          <Grid item md={6}>
            <TextField
              variant="outlined"
              label="Fat(g)"
              id="standard-number"
              type="number"
              name="fat"
              value={fat}
              onChange={this.onChange}
            ></TextField>
          </Grid>
          <Grid item md={6}>
            <TextField
              variant="outlined"
              label="Carb(g)"
              id="standard-number"
              type="number"
              name="carb"
              value={carb}
              onChange={this.onChange}
            ></TextField>
          </Grid>
          <Grid item md={6}>
            <TextField
              variant="outlined"
              label="Protein(g)"
              id="standard-number"
              type="number"
              name="protein"
              value={protein}
              onChange={this.onChange}
            ></TextField>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button variant="contained" onClick={onClose}>
                Cancel
              </Button>
            </Box>
            <Button color="primary" variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </Grid>
      </form>
    );
  }
}

export default withStyles(style)(FormContent);
