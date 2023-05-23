import React from "react";

import { calculateMean, calculateMedian, calculateMode } from "../src/Utili";
import { data } from "../src/Data";

function FlavanoidsStatistics() {
  // Calculate class-wise statistics
  const statistics = {};
  data.forEach((item) => {
    const { Alcohol, Flavanoids } = item;

    if (!statistics[Alcohol]) {
      statistics[Alcohol] = {
        mean: [Flavanoids],
        median: [Flavanoids],
        mode: [Flavanoids],
      };
    } else {
      statistics[Alcohol].mean.push(Flavanoids);
      statistics[Alcohol].median.push(Flavanoids);
      statistics[Alcohol].mode.push(Flavanoids);
    }
  });

  // Calculate final class-wise statistics
  const classWiseStatistics = {};
  for (const Alcohol in statistics) {
    const { mean, median, mode } = statistics[Alcohol];

    classWiseStatistics[Alcohol] = {
      mean: calculateMean(mean),
      median: calculateMedian(median),
      mode: calculateMode(mode),
    };
  }

  return (
    <>
      <div>
        <table>
          <tr>
            <th>Messure</th>
            {Object.entries(classWiseStatistics).map(
              ([Alcohol, statistics]) => (
                <th key={Alcohol}>CLASS {Alcohol}</th>
              )
            )}
          </tr>
          <tr>
            <th>Flavanoids Mean</th>
            {Object.entries(classWiseStatistics).map(
              ([Alcohol, statistics]) => (
                <td key={Alcohol}>{statistics.mean}</td>
              )
            )}
          </tr>
          <tr>
            <th>Flavanoids Median</th>
            {Object.entries(classWiseStatistics).map(
              ([Alcohol, statistics]) => (
                <td key={Alcohol}>{statistics.median}</td>
              )
            )}
          </tr>
          <tr>
            <th>Flavanoids Mode</th>
            {Object.entries(classWiseStatistics).map(
              ([Alcohol, statistics, i]) => (
                <td key={Alcohol}>{statistics.mode}</td>
              )
            )}
          </tr>
        </table>
      </div>
    </>
  );
}

export default FlavanoidsStatistics;
