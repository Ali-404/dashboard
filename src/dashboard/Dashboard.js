import React from 'react'
import Nav from './Nav'
import InfoCard from './InfoCard'
import Container from './Container'
import { Button, Divider, Typography } from '@mui/material'
import {  FaHandHoldingDollar, FaMoneyBillTransfer, FaMoneyBillTrendUp, FaSackXmark, FaWallet } from 'react-icons/fa6'
import HistoryTable from './HistoryTable'
import Pie from './Pie'
import SoldChart from './SoldChart'

export default function Dashboard() {
  return (
    <Container className='flex flex-col gap-4' >
      <Nav />

      {/* top */}
      <div className='flex items-center gap-4  flex-wrap '>
       <InfoCard titleSize="h1" flex={0.8} head={"Sold"} icon={<FaWallet />} number={"100 $"}/>
       
       <div className='flex flex-col gap-4 flex-[0.3]'>
         <InfoCard head={"Incomes"} number={"+60.00 $"} icon={<FaMoneyBillTrendUp />} />
         <Button startIcon={<FaHandHoldingDollar />} variant='contained' color='success' sx={{borderRadius:50}} className='w-full'>test</Button>
       </div>
       
       <div className='flex flex-col gap-4 flex-[0.3]'>
        <InfoCard head={"Outcomes"} number={"-50.00 $"} icon={<FaSackXmark />} />
         <Button startIcon={<FaMoneyBillTransfer />} variant='contained' color='error' sx={{borderRadius:50}} className='w-full '>test</Button>

       </div>
      </div>

        {/* Middle */}
        <Typography variant='h4' sx={{marginTop:10}} >Sold History</Typography>
        <Divider />
        <div className='flex items-center md:gap-12 gap-4'>
        <Pie />
        <HistoryTable />
       </div>

       <Typography variant='h4'  sx={{marginTop:10}} >Sold Varient</Typography>
        <Divider />
       {/* bottom */}
       <div>

        <SoldChart/>

       </div>
    </Container>
  )
}
