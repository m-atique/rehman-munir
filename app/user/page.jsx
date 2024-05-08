'use client'

import React from 'react'
import { MdAirplaneTicket,MdDelete } from "react-icons/md";
import { HiMiniTicket } from "react-icons/hi2";
import { RxLapTimer } from "react-icons/rx";
import { Suspense } from 'react';

import Tickettypes from './components/tickettypes';
import {PicCarousal} from '@/components/ui/piccarousal'
// import EmblaCarousel from '@/components/ui/emblacrsl'



const UserHome = () => {
  return (
    <main className=' bg-gradient-to-br from-blue-300   via-blue-100 bg-blue-200 flex flex-col items-center min-h-full '>
      <div className =' h-[32rem] w-screen place-content-center flex' >
      <PicCarousal />
      </div>
<div className=' w-full min-h-screen  text-left font-extrabold font-sans '>
<div className=' bg-opacity-75  flex items-center justify-around p-10'>
  <div className='w-1/4 h-20 rounded-lg bg-white  shadow-md shadow-slate-400 flex text-center'>
    <div className='w-2/5 h-20 rounded-s-lg bg-green-500 flex items-center justify-center'>
      <MdAirplaneTicket size={50} color='white' />
    </div>
    <div className='w-3/4 h-20 rounded-e-lg bg-slate-100 p-3'>Sold Tickets
    <span className='block font-normal pt-2'>6</span>
    </div>
  </div>
  <div className='w-1/4 h-20 rounded-lg bg-white  shadow-md shadow-slate-400 flex text-center'>
    <div className='w-2/5 h-20 rounded-s-lg bg-blue-500 flex items-center justify-center'>
      <RxLapTimer size={45} color='white' />
    </div>
    <div className='w-3/4 h-20 rounded-e-lg bg-slate-100 p-3'>Hold Tickets
    <span className='block font-normal pt-2'>6</span>
    </div>
  </div>
  <div className='w-1/4 h-20 rounded-lg bg-white  shadow-md shadow-slate-400 flex text-center'>
    <div className='w-2/5 h-20 rounded-s-lg bg-red-500 flex items-center justify-center'>
      <MdDelete size={45} color='white' />
    </div>
    <div className='w-3/4 h-20 rounded-e-lg bg-slate-100 p-3'>Cancelled Tickets
    <span className='block font-normal pt-2'>6</span>
    </div>
  </div>
</div>
<Suspense fallback={()=>(<>Loading......</>)}>
<Tickettypes />
    </Suspense>


      </div>
      <div className=' p-10 w-full bg-white text-center mt-10'>
  copyrights reserved by Rehman Munir Travels 
</div>
      </main>
  )
}

export default UserHome