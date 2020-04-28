import {
  Box,
  Button,
  Grid,
  TableContainer,
  withStyles,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { Component } from "react";
import FormContent from "./../FormContent";
import CommandModal from "./../Modal";
import Pagination from "./../Pagination";
import SearchBox from "./../SearchBox";
import style from "./style";
import LineDemo from "./../Bar/index";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      pageLimit: "",
      totalPages: "",
      currentPage: "",
      starIndex: "",
      endIndex: "",
      keyword: "",
      open: false,
      title: "",
      formContent: "",
      task: [],
      taskEditing: null,
      taskDelete: null,
      dataBar: null,
      formChart: "",
      //   data: [
      //     ...data.map(items => {
      //       return { ...items, selected: false };
      //     })
      //   ]
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("task")) {
      var task = JSON.parse(localStorage.getItem("task"));
      this.setState({
        task: task,
      });
    }
  }

  showListofData = () => {
    var data = [
      {
        id: 1,
        name: "Yoghurt",
        calo: "100",
        fat: "7",
        carb: "23",
        protein: "12",
      },
      {
        id: 2,
        name: "Blueberry",
        calo: "120",
        fat: "9",
        carb: "26",
        protein: "15",
      },
      {
        id: 3,
        name: "Ice Cream",
        calo: "158",
        fat: "2",
        carb: "45",
        protein: "8",
      },
      {
        id: 4,
        name: "Milk Tea",
        calo: "455",
        fat: "23",
        carb: "78",
        protein: "1",
      },
      {
        id: 5,
        name: "OlongTea",
        calo: "232",
        fat: "12",
        carb: "65",
        protein: "13",
      },
      {
        id: 6,
        name: "Cup Cake",
        calo: "122",
        fat: "3",
        carb: "35",
        protein: "2",
      },
      {
        id: 7,
        name: "Sandwitch",
        calo: "86",
        fat: "1",
        carb: "23",
        protein: "12",
      },
      {
        id: 8,
        name: "Coffee",
        calo: "23",
        fat: "1",
        carb: "3",
        protein: "1",
      },
      {
        id: 9,
        name: "Snack",
        calo: "323",
        fat: "23",
        carb: "56",
        protein: "12",
      },
      {
        id: 10,
        name: "Brown",
        calo: "25",
        fat: "13",
        carb: "33",
        protein: "21",
      },
      {
        id: 11,
        name: "Coconut Oil",
        calo: "233",
        fat: "45",
        carb: "2",
        protein: "1",
      },
      {
        id: 12,
        name: "Whey",
        calo: "97",
        fat: "1",
        carb: "1",
        protein: "25",
      },
      {
        id: 13,
        name: "BCAA",
        calo: "0",
        fat: "0",
        carb: "1",
        protein: "1",
      },
      {
        id: 14,
        name: "Chicken",
        calo: "78",
        fat: "12",
        carb: "15",
        protein: "25",
      },
      {
        id: 15,
        name: "Beef",
        calo: "115",
        fat: "15",
        carb: "34",
        protein: "26",
      },
      {
        id: 16,
        name: "Fish",
        calo: "120",
        fat: "12",
        carb: "24",
        protein: "22",
      },
      {
        id: 17,
        name: "PanCake",
        calo: "231",
        fat: "34",
        carb: "12",
        protein: "5",
      },
    ];
    this.setState({
      task: data,
    });
    localStorage.setItem("task", JSON.stringify(data));
  };

  //show data////

  showDataProduct = (data) => {
    let xhtml = null;
    const { classes } = this.props;
    xhtml = data.map((items, index) => {
      return (
        <TableRow key={items.id}>
          <TableCell className={classes.tableCell}>{items.name} </TableCell>
          <TableCell className={classes.tableCell}>
            <EditIcon
              className={classes.iconEdit}
              onClick={() => this.toggleEditing(items.id)}
            />
            <DeleteIcon
              className={classes.iconDelete}
              onClick={() => this.toggleDeleting(items.id)}
            />
          </TableCell>
          <TableCell className={classes.tableCell}>
            {" "}
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonClick}
              onClick={() => this.listDatatoBar(items.id)}
            >
              Click Here
            </Button>
          </TableCell>
          <TableCell
            className={classes.tableCell}
            align="right"
            key={items.index}
          >
            {items.calo}
          </TableCell>
          <TableCell
            className={classes.tableCell}
            align="right"
            key={items.index}
          >
            {items.carb}
          </TableCell>
          <TableCell
            className={classes.tableCell}
            align="right"
            key={items.index}
          >
            {items.fat}
          </TableCell>
          <TableCell
            className={classes.tableCell}
            align="right"
            key={items.index}
          >
            {items.protein}
          </TableCell>
        </TableRow>
      );
    });

    return xhtml;
  };

  ////change page pagination
  onChangePage = (e) => {
    this.setState({
      pageLimit: e.pageLimit,
      totalPages: e.totalPages,
      currentPage: e.page,
      starIndex: e.starIndex,
      endIndex: e.endIndex,
    });
  };
  /// search ///

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };
  ///show form ////
  showForm() {
    const { open, title, formContent } = this.state;
    let xhtml = null;
    xhtml = (
      <CommandModal
        open={open}
        title={title}
        formContent={formContent}
        onClose={() => this.closeForm()}
      ></CommandModal>
    );
    return xhtml;
  }

  ///close form ////
  closeForm() {
    this.setState({
      open: false,
    });
  }

  ///show form edit////
  toggleEditing = (id) => {
    console.log("id : ", id);
    var { task } = this.state;
    var index = task.findIndex((x) => x.id === id);
    console.log("index : ", index);
    var taskEditing = task[index];
    console.log(taskEditing);
    this.setState({
      taskEditing: taskEditing,
      open: true,
      title: "Edit",
      formContent: (
        <FormContent
          onSubmitEdit={this.onSubmitEdit}
          taskEditing={taskEditing}
          onClose={() => this.closeForm()}
        ></FormContent>
      ),
    });
  };

  onSubmitEdit = (data) => {
    var { task } = this.state;
    var index = task.findIndex((x) => x.id === data.id);
    if (task[index]) {
      task[index] = data;
      console.log(task[index]);
      this.setState({
        task: task,
      });
    } else {
      task.push(data);
      this.setState({
        task: task,
      });
    }
    localStorage.setItem("task", JSON.stringify(task));
    this.closeForm();
  };

  ///show form delete ////
  toggleDeleting = (id) => {
    var { task } = this.state;
    var index = task.findIndex((x) => x.id === id);
    var taskDelete = task[index];
    console.log("delete", taskDelete);
    this.setState({
      taskDelete: taskDelete,
      open: true,
      title: "Delete",
      formContent: (
        <div>
          <p>Bạn có chắc chắn muốn xóa ?</p>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button
                  variant="contained"
                  onClick={() => this.closeDeleteForm()}
                >
                  Cancel
                </Button>
              </Box>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={() => this.onDeleteForm(taskDelete)}
              >
                Save
              </Button>
            </Box>
          </Grid>
        </div>
      ),
    });
  };

  onDeleteForm = (data) => {
    console.log(data);
    var { task } = this.state;
    var index = task.findIndex((x) => x.id === data.id);
    data = task.splice(index, 1);
    this.setState({
      data: task,
    });
    this.closeForm();
  };

  closeDeleteForm = () => {
    this.closeForm();
  };
  ///add form ////

  showAddForm = () => {
    this.setState({
      open: true,
      title: "Add New Dessert(100g serving)",
      formContent: (
        <FormContent
          onSubmitEdit={this.onSubmitEdit}
          onClose={() => this.closeForm()}
        />
      ),
    });
  };

  /////list items to bar ///
  listDatatoBar = (id) => {
    console.log(id);
    var { task } = this.state;
    var index = task.findIndex((x) => x.id === id);
    var dataBar = task[index];
    console.log(dataBar);
    this.setState({
      dataBar: dataBar,
      formChart: <LineDemo dataBar={dataBar}></LineDemo>,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = this.props;
    var {
      pageLimit,
      currentPage,
      totalPages,
      starIndex,
      endIndex,
      totalRecords,
      keyword,
      task,
      formChart,
    } = this.state;

    //search
    if (keyword) {
      task = task.filter((items) => {
        return items.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    var rowsPerPage = [];
    rowsPerPage = task.slice(starIndex, endIndex + 1);

    return (
      <div>
        <Box mt={1} className={classes.titleName}>
          <Button color="secondary" variant="contained">
            DTL nutrition chart JS
          </Button>
        </Box>
        <TableContainer component={Paper} className={classes.container}>
          <Box mt={1}>
            <Button
              color="primary"
              variant="contained"
              onClick={this.showListofData}
            >
              Show Data
            </Button>
          </Box>
          {this.showForm()}
          <SearchBox onSubmitForm={this.onSearch}></SearchBox>
          <AddCircleIcon
            className={classes.addIcon}
            fontSize="large"
            onClick={this.showAddForm}
          />

          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>
                  Dessert (100g serving)
                </TableCell>
                <TableCell className={classes.tableCell}>Edit</TableCell>
                <TableCell className={classes.tableCell}>Show Line</TableCell>
                <TableCell className={classes.tableCell} align="right">
                  Calories
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.showDataProduct(rowsPerPage)}</TableBody>
          </Table>
          <div className={classes.footer}>
            <div className={classes.textPagination}>
              <p>
                {task.length} Sản phẩm || Trang {currentPage} / {totalPages}
              </p>
            </div>
            <div>
              <Pagination
                totalRecords={task.length}
                pageLimit={pageLimit || 4}
                initialPage={1}
                pageToShow={5}
                onChangePage={this.onChangePage}
              />
            </div>
          </div>
        </TableContainer>
        {/* {this.showChart()} */}
        {formChart}
      </div>
    );
  }
}

export default withStyles(style)(ListItems);
