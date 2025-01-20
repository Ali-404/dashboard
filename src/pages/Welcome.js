import { Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Welcome() {
    const {user} = useSelector(state => state.auth)
  return (
    <Dialog open={true} >
      <DialogTitle>
        <Typography variant='h3'>Welcome {user.username} 🙋🏻‍♂️</Typography>
      </DialogTitle>
      <DialogActions>
        <Button LinkComponent={Link} to="/" sx={{backgroundColor:"#4aad9b", color:"white"}} >Get Started</Button>
      </DialogActions>
    </Dialog>
  )
}
