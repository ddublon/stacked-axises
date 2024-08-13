import React, { useEffect } from "react";
import "./App.css";
import {
  Axis,
  AxisTickStrategies,
  emptyLine,
  lightningChart,
  transparentFill,
} from "@lightningchart/lcjs";

export default function App() {
  useEffect(() => {
    const lc = lightningChart({
      license:
        "private",
    });
    const chart = lc.ChartXY({
      container: "chart",
    });
    const axisX1 = chart.axisX;
    const axisX2 = chart.addAxisX({ iStack: 1 });
    const axisX3 = chart.addAxisX({ iStack: 2 });
    axisX1.setMargins(0, 20);
    axisX2.setMargins(0, 10);
    const hideAxis = (axisParameter: Axis) => {
      axisParameter
        .setStrokeStyle(emptyLine)
        .setThickness(0)
        .setTickStrategy(AxisTickStrategies.Numeric, (strategy) =>
          strategy.setTickStyle((ticks) =>
            ticks.setLabelFillStyle(transparentFill).setTickStyle(emptyLine)
          )
        );
    };
    hideAxis(axisX2);

    axisX3.setMargins(10, 0);
    chart.setTitle("");
    chart.setPadding({ left: 0, right: 15, bottom: 0 });
    axisX1.setLength({ relative: 0.475 });
    axisX2.setLength({ relative: 0.05 });
    axisX3.setLength({ relative: 0.475 });
  }, []);

  return (
    <div
      id="chart"
      style={{ width: "1200px", height: "500px" }}
      className="App"
    ></div>
  );
}
