import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function SoldChart() {
  return (
    <LineChart
      series={[
        {
          data: [2, -5.5, 2, -7.5, 1.5, 6],
          area: true,
          baseline: 'min',
          curve:"natural",
          color:"#9ED2F0"
        },
        
      ]}
      height={300}
    />
  );
}
