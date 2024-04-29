import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// import { Doughnut } from 'react-chartjs-2';
// import { Doughnut } from 'react-chartjs-2';

function DoughnutBar(chartData) {
  return (
    <div>
      DoughnutBar
      <Doughnut data={chartData} />
    </div>
  );
}

export default DoughnutBar;
