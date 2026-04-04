import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import colors from "tailwindcss/colors";
import { color } from 'chart.js/helpers';

// Register the components needed for a Radar chart
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillChart = ({ myData, header }) => {
  const labels = myData.map(d => d.label)
  const values = myData.map(d => d.value)
  const data = {
    labels,
    datasets: [
      {
        label: header,
        data: values,
        backgroundColor: toRgba(colors.blue[400], .2),
        borderColor: colors.orange[400],
        borderWidth: 2,
        pointBackgroundColor: colors.red[400],
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors.red[400],
      },
    ],
  };

  const options = {
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 16,
          },
          color: colors.blue[400],
        },
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          stepSize: 2,
        },
        grid: {
          color: '#eee',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div style={{ width: '500px', margin: '0 auto' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillChart;

function toRgba(color: string, a: number): string {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);

  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
