import { Avatar, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import {FaCoins, FaDoorOpen} from 'react-icons/fa6'
export default function Nav() {
  return (
    <div className='flex items-center gap-2 justify-between py-4'>
      <Typography variant='h5'>LOGO</Typography>
      <div>
      <Tooltip title="Convert Currency">

        <IconButton size='small'>
          <FaCoins />
        </IconButton>
    </Tooltip> 
      </div>
      <div className='flex items-center gap-2'>
        <Typography variant='button' >Ali</Typography>
        <Avatar sx={{ width: 32, height: 32 }}  alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <IconButton >
              <FaDoorOpen /> 
          </IconButton>

      </div>
    </div>
  )
}
