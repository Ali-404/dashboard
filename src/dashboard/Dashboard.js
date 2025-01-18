import React from 'react'
import Nav from './Nav'
import InfoCard from './InfoCard'
import Container from './Container'
import { Button } from '@mui/material'
import { FaCableCar, FaHandHoldingDollar, FaMoneyBillTransfer, FaPlus } from 'react-icons/fa6'

export default function Dashboard() {
  return (
    <Container >
      <Nav />

      {/* top */}
      <div className='flex items-center gap-4  flex-wrap '>
       <InfoCard titleSize="h1" flex={0.8} head={"Sold"} icon={<FaCableCar />} number={100}/>
       
       <div className='flex flex-col gap-4 flex-[0.3]'>
         <InfoCard head={"Incomes"} number={60} />
         <Button startIcon={<FaHandHoldingDollar />} variant='contained' color='success' sx={{borderRadius:50}} className='w-full'>test</Button>
       </div>
       
       <div className='flex flex-col gap-4 flex-[0.3]'>
        <InfoCard head={"Outcomes"} number={50} />
         <Button startIcon={<FaMoneyBillTransfer />} variant='contained' color='error' sx={{borderRadius:50}} className='w-full '>test</Button>

       </div>
      
      </div>
    </Container>
  )
}
