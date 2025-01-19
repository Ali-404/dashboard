import React, { useState } from 'react'
import Nav from './Nav'
import InfoCard from './InfoCard'
import Container from './Container'
import { Button, Divider, Typography } from '@mui/material'
import {  FaHandHoldingDollar, FaMoneyBillTransfer, FaMoneyBillTrendUp, FaSackXmark, FaWallet } from 'react-icons/fa6'
import HistoryTable from './HistoryTable'
import Pie from './Pie'
import SoldChart from './SoldChart'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../features/sold/soldSlice'
import AddModel from './AddModel'

export default function Dashboard() {

  const [modalOpen ,setModalOpen] = useState(false)
  const [modalType ,setModalType] = useState("Income")

  const totalIncomes = useSelector(state => getTotal(state, "income"))
  const totalOutcomes = useSelector(state => getTotal(state, "outcome"))

  const ModalAddOutcome = () => {
    setModalType("Outcome")
    setModalOpen(true)
  }
  
  const ModalAddIncome = () => {
    setModalType("Income")
    setModalOpen(true)
  }

  return (
    <>
    <Container className='flex flex-col gap-4 px-4 md:px-10' >
      <Nav />

      {/* top */}
      <div className='flex items-center gap-4  flex-wrap justify-center flex-col md:flex-row'>
        <div className='md:flex-1'>
        <InfoCard color={ (totalIncomes - totalOutcomes) < 0 ? "#dd3369" : (totalIncomes - totalOutcomes) === 0 ? "black" : "#4aad9b"  } titleSize="h1" flex={0.8} head={"Sold"}  icon={<FaWallet />} number={(Number(totalIncomes - totalOutcomes).toFixed(2)) + " $"}/>
        </div>
       
       <div className='flex flex-col md:gap-4 flex-[0.3]'>
         <InfoCard head={"Incomes"} number={`+${Number(totalIncomes).toFixed(2)} $`} icon={<FaMoneyBillTrendUp />} />
         <Button startIcon={<FaHandHoldingDollar />} variant='contained'  sx={{borderRadius:50, backgroundColor: "#4aad9b"}} className='w-full' onClick={ModalAddIncome}>Add Incomes +</Button>
       </div>
       
       <div className='flex flex-col md:gap-4 flex-[0.3]'>
        <InfoCard head={"Outcomes"} number={`-${Number(totalOutcomes).toFixed(2)} $`} icon={<FaSackXmark />} />
         <Button startIcon={<FaMoneyBillTransfer />} variant='contained' sx={{borderRadius:50, backgroundColor: "#dd3369"}}  className='w-full ' onClick={ModalAddOutcome}>Add Outcomes -</Button>

       </div>
      </div>

        {/* Middle */}
        <Typography variant='h4' sx={{marginTop:10}} >Sold History</Typography>
        <Divider />
        <div className='flex items-center md:gap-12 gap-4 flex-wrap lg:flex-nowrap'>
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
       <AddModel open={modalOpen} handleClose={() => setModalOpen(false)} type={modalType} />
       </>
  )
}
