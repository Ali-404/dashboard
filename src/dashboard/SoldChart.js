import  React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useSelector } from 'react-redux';

export default function SoldChart() {
  
  const {history} = useSelector(state => state.sold)
  const sortedHistory = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  const amounts = sortedHistory.map(item => item.type === "income" ?  Number(item.amount).toFixed(2) : - Number(item.amount).toFixed(2));
 
  return (

    
    <LineChart
      series={[
        {
          data: amounts,
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
