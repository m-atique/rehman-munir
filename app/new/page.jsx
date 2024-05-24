'use client'
import React,{useState} from 'react'
import { User2,KeyRound } from 'lucide-react'
import logo from '@/public/logo.png'
import Image from 'next/image'

const Login = () => {
  const [data, setData] = useState([])
  const [user,setUser] =useState("")
  const [pwd,setPwd] =useState("")
  const [emptyUser,setEmptyUser] =useState('hidden')
  const [emptyPwd,setEmptyPwd] =useState('hidden')
  return (
     <div className="bg-[url('../public/loginbg.jpg')] brightness-105 bg-cover" >
  
    <div className=' w-3/5 flex flex-row  items-center justify-start  '>
    <Image src={logo}  alt="logo" width={90} height ={90} className=' brightness-125 sm:w-34 sm:h-34 w-40 h-30'
     />
     <h1 className='text-white  w-full  sm:text-3xl font-prompt text-xs md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-green-100 under to-yellow-100 bg-clip-text'> Rehman Munir Travels Faisalabad<span className='block ml-20 sm:ml-1 sm:inline'></span></h1>
      </div>


  <div className=" h-screen flex justify-between items-center md:items-start lg:items-center ">
    <div className =' items-start  h-full w-2/4 justify-center hidden sm:block md:hidden lg:block '>
  
     </div>
     <div className ="sm:w-2/6 h-full pb-10 flex item-center justify-center w-full md:w-full lg:w-2/6 md:h-4/5 md:items-start  lg:h-full lg:items-start   bg-opacity-15">


      <div className='bg-slate-300 sm:w-3/4 md:w-3/6 lg:w-4/5 bg-opacity-90  h-5/6  p-10 pt-15 flex flex-col justify-center gap-3 rounded-full border-[13px] border-white  shadow-2xl shadow-slate-500'>

        <div className='mb-2 pl-1'>
          <h1 className='text-3xl pb-5 font-extrabold text-teal-800'> Log <span className='text-orange-400'> in</span> </h1>
        </div>
       <p className ={`text-xs text-red-600 ${emptyUser}`}>Please Enter User ID</p>
       <div className='flex-row flex items-center border  rounded-lg  '> 
       <User2 stroke='#051532' className=' absolute  w-[36px] h-[40px] p-2' />
      <input 
      className=' p-3 text w-full pl-10 text-black '
      placeholder='User'
      type ='text'
      value ={user}
      onChange={(e)=>setUser(e.target.value)}
       />
       </div>
       <div className='flex-row flex items-center  rounded-lg bg-white'> 
       <KeyRound stroke='#051532' className='absolute  w-[36px] h-[40px] p-2' />
      <input 
      className='rounded-sm p-3 text w-full pl-10 text-black' 
      placeholder='Passward' 
      type='password'
      value ={pwd}
      onChange={(e)=>setPwd(e.target.value)}
      />
       </div>

       <p className ={`text-xs text-red-600 ${emptyPwd} `}>Please Enter Password</p>
      <div className='flex w-full justify-end pt-12'>
      <button
      onClick={()=>onsubmit()}
      className='bg-blue-900 p-3 w-3/5 rounded-md text-white text-md font-semibold'>Sign in</button>
      </div>
      
      <div className='mt-20 text-center'>
        <p className ='text-center text-teal-900 font-extralight text-xs w-full italic '>Copyrights&copy;   reserved by</p>
      <p className ='text-center text-teal-900  font-extralight text-xs w-full '>  <span className='font-bold '> Rehman Munir Travels </span>  <span className='italic font-bold'> </span></p>
      <p className='text-teal-900  text-xs'>Developed by Techno Hub Faisalabad</p>
      </div>
      </div>
     </div>
    
  </div>
  </div>
  )
}

export default Login