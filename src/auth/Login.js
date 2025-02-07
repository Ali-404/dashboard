import React, {  useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Button, CircularProgress  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../features/auth/authSlice';
import Welcome from './Welcome';


export default function Login() {

    const dispatch = useDispatch()
    const {error, loading, user} = useSelector(state => state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)

    
    const loginCheck = (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }
    
        setIsDisabled(true);
    
        try {
            dispatch(loginAsync({ email, password }))
        } catch (err) {
            alert('Login failed. Please check your informations.');
        } finally {
            setIsDisabled(false);
        }
    };
    

  return (
    <div className='min-h-screen bg-gradient-to-tl from-light_cyan-600 to-light_cyan-900 flex items-center justify-center'>
        <div className='bg-gradient-to-b to-white-500 from-light_cyan-800 w-[450px] border border-gray-300 rounded-xl drop-shadow flex flex-col items-center justify-center gap-5 p-6'>
            <div className='w-14 h-14 bg-white shadow rounded-2xl flex items-center justify-center'><LoginIcon/></div>
            <div className='flex flex-col items-center justify-center gap-1'>
                <h1 className='text-2xl font-bold'>Sign in with email</h1>
                <p className='text-center text-gray-500 text-sm px-12'>Welcome! Login to Manage your finances.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 w-full px-5'>
                <div className='w-full h-9 bg-gray-200 flex items-center justify-center gap-1 rounded-lg px-2'>
                    <EmailIcon className='text-gray-500' />
                    <input type='email' placeholder='Email' onChange={(e) =>setEmail(e.target.value)} className='bg-gray-200 placeholder:text-gray-500 focus:outline-none flex-1' />
                </div>
                <div className='w-full h-9 bg-gray-200 flex items-center justify-center gap-1 rounded-lg px-2'>
                    <LockIcon className='text-gray-500'/>
                    <input type='password' placeholder='Password' onChange={(e) =>setPassword(e.target.value)} className='bg-gray-200 placeholder:text-gray-500 focus:outline-none flex-1'/>
                </div>
                <p className='self-end text-sm'>Forgot password?</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 w-full px-5'>
                {error && (
                    <p className="text-red-500 text-sm">
                        {error || 'Something went wrong. Please try again.'}
                    </p>
                )}
                <Button variant='contained' color='error' sx={{backgroundColor:"#4aad9b", color:"white"}} className='w-full h-10 rounded-lg' onClick={(e)=>loginCheck(e)} disabled={loading || isDisabled}>{loading ? <CircularProgress size={20} color="inherit" /> : 'Get Started'}</Button>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <hr className='border border-gray-300 w-28'/>
                    <small className='text-gray-500'>Or sign in with</small>
                    <hr className='border border-gray-300 w-28'/>
                </div>
                <div className='flex flex-row items-center justify-between w-full p-2'>
                    <Button color='inherit' className='bg-white h-10 w-24 shadow drop-shadow-sm rounded-lg'><GoogleIcon/></Button>
                    <Button color='inherit' className='bg-white h-10 w-24 shadow drop-shadow-sm rounded-lg'><FacebookRoundedIcon/></Button>
                    <Button color='inherit' className='bg-white h-10 w-24 shadow drop-shadow-sm rounded-lg'><AppleIcon/></Button>
                </div>
            </div>
        </div>
        {user && <Welcome  />}
    </div>
  )
}
