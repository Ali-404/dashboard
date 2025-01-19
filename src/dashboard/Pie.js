import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useSelector } from 'react-redux';
import { getTotal } from '../features/sold/soldSlice';

export default function Pie() {
  const totalIncomes  = useSelector(state => getTotal(state, "income"))
  const totalOutcome  = useSelector(state => getTotal(state, "outcome"))
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: totalIncomes, label: 'Incomes',color:"#4aad9b" },
            { id: 1, value: totalOutcome, label: 'Outcomes', color:"#dd3369" },
          ],
        },
      ]}
      width={600}
      height={300}
    />
  );
}
