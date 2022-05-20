import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import { DailyData } from "../../api";
import "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";
const Charts = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [daily, setDaily] = useState([]);
  const [loading, setLoding] = useState(true);
  useEffect(() => {
    DailyData().then((res) => {
      setDaily(res);
      setLoding(false);
    });
  }, []);
  const barChart = confirmed ? (
    <>
      <p style={{ textAlign: "center" }}>Current state in {country}</p>
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    </>
  ) : null;
  const lineChart = daily.length ? (
    <Line
      data={{
        labels: daily.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: daily.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: daily.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>
      {loading ? (
        <SpinnerCircular
          size={86}
          thickness={180}
          speed={100}
          color="rgba(57, 60, 172, 1)"
          secondaryColor="rgba(61, 57, 172, 0.66)"
        />
      ) : country ? (
        barChart
      ) : (
        lineChart
      )}
    </div>
  );
};
/*
 */

export default Charts;
