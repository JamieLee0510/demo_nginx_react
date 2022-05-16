import React, { useEffect, useRef, useState } from "react";
import Layout from "../../layout/Layout";
import ReactEcharts from "echarts-for-react";
import "./Demo.css";

export default function Demo() {
  const mounted = useRef(false);

  const [count, setCount] = useState(0);
  const op = {
    title: {
      text: "",
    },
    tooltip: {},
    legend: {
      data: ["Evaporation", "Precipitation", "Temperature"],
    },
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: [
      {
        type: "value",
        name: "Precipitation",
        min: 0,
        max: 250,
        interval: 50,
        position: "left",
        axisLabel: {
          formatter: "{value} ml",
        },
      },
      {
        type: "value",
        name: "Temperature",
        min: 0,
        max: 25,
        interval: 5,
        position: "right",
        axisLabel: {
          formatter: "{value} °C",
        },
      },
    ],
    series: [
      {
        name: "Evaporation",
        type: "bar",
        yAxisIndex: 0,
        data: [5, 7, 10, 22, 24, 78, 135],
      },
      {
        name: "Precipitation",
        type: "bar",
        yAxisIndex: 0,
        data: [6, 9, 13, 25, 26, 70, 175],
      },
      {
        name: "Temperature",
        type: "line",
        yAxisIndex: 1,
        data: [2.2, 2.5, 3.4, 4.7, 6, 10.1, 20.2, 23.5],
      },
    ],
  };

  useEffect(() => {
    if (mounted.current === false) {
      // componentDidMount area
      mounted.current = true;
      console.log("componentDidMount");
    } else {
      // componentDidUpdate area
      console.log("componentDidUpdate");
    }
    return () => {
      console.log("unMounted");
    };
  }, [count]);

  return (
    <Layout>
      <h1>Demo</h1>
      <div>the count is {count}</div>
      <button onClick={() => setCount(count + 1)}>add 1</button>
      <div className="chart">
        <ReactEcharts option={op} />
      </div>
    </Layout>
  );
}
