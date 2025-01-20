import { Avatar, Button, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import {FaCoins, FaDoorOpen, FaUser} from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Nav() {

  const {user} = useSelector(state => state.auth)
  
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
    </div>
  )
}
