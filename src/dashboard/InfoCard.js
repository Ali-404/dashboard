import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function InfoCard({head,number,icon, titleSize = "h3", flex, className = "", color = 'black'}) {
  
  const {currency, rate} = useSelector(state => state.currency)
  
  
  return (
       <Card sx={{flex:flex , boxShadow: "none", borderRadius: 5,color:color}} className={'*:drop-shadow-lg ' + className}>
          <CardContent>
        <div className='flex items-center justify-between'>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
         {head}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{icon}</Typography>
        </div>
       
        <Typography variant={titleSize} className='uppercase' component="div">
         {head === "Incomes" ? "+" : head === "Outcomes" ? "-" : ""} {(Number(number) * rate).toFixed(2) } <small className='text-[20px]'>{currency}</small>
        </Typography>
        
      </CardContent>

        </Card>
  )
}
