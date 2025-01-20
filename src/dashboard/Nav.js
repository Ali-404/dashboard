import { Avatar, Button, CircularProgress, Drawer, FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {FaCoins, FaDoorOpen, FaUser} from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeCurrency } from '../features/currency/currencySlice'
export default function Nav() {

  const dispatch = useDispatch()

  const {user} = useSelector(state => state.auth)
  const {currency,all_currencies, loading} = useSelector(state => state.currency)
  const [drawerOpen, setDrawerOpen] = useState(false)


  const changeCurrencyFunc = (e) => {
    dispatch(changeCurrency(e.target.value))
  }
  
  return (
    <div className='flex items-center gap-2 justify-between py-4'>
      <Typography variant='h5'>LOGO</Typography>
      <div>
      <Tooltip title="Convert Currency">
      {loading ? (
        <CircularProgress />
      ) : (
        <IconButton size='small' onClick={() => setDrawerOpen(true)}>
          <FaCoins />
        </IconButton>
      )}
    </Tooltip> 
      </div>
      <div className='flex items-center gap-2'>
      {user ? (
        <>
        <Typography variant='button' >{user.username}</Typography>
        <Avatar sx={{ width: 32, height: 32 }}  alt="Remy Sharp" src={user.image} />
        <IconButton LinkComponent={Link}   >
            <FaDoorOpen /> 
        </IconButton>
        </>
      ) : (
        <>
        <Tooltip title="Login">
          <IconButton LinkComponent={Link} to={"/login"}  >
              <FaUser /> 
          </IconButton>
        </Tooltip>
        </>
      )}

      </div>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} >
        <div className='min-w-[300px] p-4'>
          <Typography variant='h6'>💵 Convert Currency</Typography>
          <FormControl fullWidth>
            <InputLabel id="label">Age</InputLabel>
            <Select
              labelId="label"
              value={currency}
              label="Age"
              onChange={changeCurrencyFunc}
            >

            {Object.keys(all_currencies).map(k =>  <MenuItem  value={k}>{k}</MenuItem>)}
              
            </Select>
          </FormControl>
        </div>
       </Drawer>
    </div>
  )
}
