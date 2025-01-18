import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function InfoCard({head,number,icon, titleSize = "h3", flex, className = ""}) {
  return (
       <Card sx={{flex:flex , boxShadow: "none", borderRadius: 5}} className={'*:drop-shadow-lg ' + className}>
          <CardContent>
        <div className='flex items-center justify-between'>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
         {head}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{icon}</Typography>
        </div>
       
        <Typography variant={titleSize} className='uppercase' component="div">
         {number}
        </Typography>
        
      </CardContent>

        </Card>
  )
}
