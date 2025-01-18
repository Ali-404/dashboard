import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';


export default function Login() {
  return (
    <div className='min-h-screen bg-gradient-to-tl from-light_cyan-600 to-light_cyan-900 flex items-center justify-center'>
        <div className='bg-gradient-to-b to-white-500 from-light_cyan-800 w-[22vw] h-[50vh] border border-gray-300 rounded-xl drop-shadow flex flex-col items-center justify-center gap-5 px-6'>
            <div className='w-14 h-14 bg-white shadow rounded-2xl flex items-center justify-center'><LoginIcon/></div>
            <div className='flex flex-col items-center justify-center gap-1'>
                <h1 className='text-2xl font-bold'>Sign in with email</h1>
                <p className='text-center text-gray-500 text-sm px-12'>Make a new doc to bring your words, data, and teams together. For free</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 w-full px-5'>
                <div className='w-full h-9 bg-gray-200 flex items-center justify-center gap-1 rounded-lg px-2'>
                    <EmailIcon className='text-gray-500' />
                    <input type='email' placeholder='Email' className='bg-gray-200 placeholder:text-gray-500 focus:outline-none flex-1' />
                </div>
                <div className='w-full h-9 bg-gray-200 flex items-center justify-center gap-1 rounded-lg px-2'>
                    <LockIcon className='text-gray-500'/>
                    <input type='password' placeholder='Password' className='bg-gray-200 placeholder:text-gray-500 focus:outline-none flex-1'/>
                </div>
                <p className='self-end text-sm'>Forgot password?</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 w-full px-5'>
                <button className='bg-black text-white w-full h-10 rounded-lg'>Get Started</button>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <hr className='border border-gray-300 w-28'/>
                    <small className='text-gray-500'>Or sign in with</small>
                    <hr className='border border-gray-300 w-28'/>
                </div>
                <div className='flex flex-row items-center justify-between w-full px-2'>
                    <button className='bg-white h-10 w-24 shadow drop-shadow-sm rounded-lg'><GoogleIcon/></button>
                    <button className='bg-white h-10 w-24 shadow drop-shadow-sm rounded-lg'><FacebookRoundedIcon/></button>
                    <button className='bg-white h-10 w-24 shadow drop-shadow-sm rounded-lg'><AppleIcon/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
