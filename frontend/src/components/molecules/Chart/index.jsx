import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const initialState ={
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  
export const Graph=({row, column})=>{
    // Displays the energy consumption for a device
    // shows estimated total, average, minimum, and maximum

    const [state, setState] = useState(initialState)
return(
    <main>
         <section>
            <h2>Display Graph</h2>
            <div className="chart">
            <div className="row">
            <div className="mixed-chart">
                <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
                />
            </div>
            </div>
        </div>
        </section>
    </main>
 
)
}