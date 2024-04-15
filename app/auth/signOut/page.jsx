'use client'
import React ,{useState}from 'react'

import { signOut} from "next-auth/react"
import logo from '../../../public/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// const onsubmit = async ()=>{
//   await  signOut(
// {

// redirect:true,
// callbackUrl :'/'
// })}


const Signouthandle = () => {

  const router = useRouter()


  return (
    <div className ="flex justify-center  bg-blend-screen brightness-105 bg-center items-center h-screen w-full">
    <div  className='flex flex-col bg-gradient-radial from-slate-200 to-slate-300 rounded-md gap-3 items-center justify-center w-2/5 h-3/6 font-sans shadow-lg shadow-slate-600'>
     <Image src={logo}  alt="logo" width={100} height ={80} className='sm:w-48 sm:h-44 '
     />
  
  <span className='text-blue-800 font-extrabold py-10'>DO YOU REALLY WANT TO SIGN OUT?</span>
  <div className='flex gap-4 w-full item-center justify-center'>

    <button type="submit" className='bg-red-500 rounded-md mt-5 w-1/4 p-2' onClick={()=>signOut()}> Yes </button>
    <button type="submit" className='bg-blue-500 rounded-md mt-5 w-1/4 p-2' onClick={()=>router.push('/')}> No </button>
  </div>
  </div>
  
  </div>
  )
}


export default Signouthandle