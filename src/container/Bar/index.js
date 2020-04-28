import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

import { withStyles } from "@material-ui/core";
import style from "./style";

class LineDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["Calories", "Fat", "Carb", "Protein"],
        datasets: [
          {
            label: this.props.dataBar.name,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
              this.props.dataBar.calo,
              this.props.dataBar.fat,
              this.props.dataBar.carb,
              this.props.dataBar.protein
            ]
          }
        ]
      }
    };
  }

  componentWillMount() {
    if (this.props.dataBar) {
      this.setState({
        id: this.props.dataBar.id,
        name: this.props.dataBar.name,
        calo: this.props.dataBar.calo,
        fat: this.props.dataBar.fat,
        carb: this.props.dataBar.carb,
        protein: this.props.dataBar.protein
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    if (nextProps && nextProps.dataBar) {
      this.setState({
        data: {
          datasets: [
            {
              label: nextProps.dataBar.name,
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [
                nextProps.dataBar.calo,
                nextProps.dataBar.fat,
                nextProps.dataBar.carb,
                nextProps.dataBar.protein
              ]
            }
          ]
        }
      });
    }
  }
  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data;
  //   console.log(datasets[0].data);
  // }
  render() {
    const { classes } = this.props;
    const { data } = this.state;
    console.log(data.datasets);
    return (
      <div className={classes.container}>
        <h2>Macro Nutrition by Đ.T.L</h2>
        <Bar ref="chart" data={data} />
      </div>
    );
  }
}

export default withStyles(style)(LineDemo);
