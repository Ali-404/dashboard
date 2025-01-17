import { BarChart } from '@mui/x-charts'
import React from 'react'

export default function App() {
  return (
    <BarChart
  xAxis={[
    {
      id: 'barCategories',
      data: ['bar A', 'bar B', 'bar C'],
      scaleType: 'band',
    },
  ]}
  series={[
    {
      data: [2, 5, 3],
    },
  ]}
  width={500}
  height={300}
/>
  )
}
