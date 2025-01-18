import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Pie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Incomes',color:"#D32F2F" },
            { id: 1, value: 15, label: 'Outcomes', color:"#2E7D32" },
          ],
        },
      ]}
      width={600}
      height={300}
    />
  );
}
