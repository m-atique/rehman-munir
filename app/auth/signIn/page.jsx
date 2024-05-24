'use client'
import React ,{useState,useContext}from 'react'

import { signIn } from "next-auth/react"
import Image from 'next/image'
import MainBck from '@/public/loginbg.jpg'
import bg from '../../../public/loginbg.jpg'
import logo from '@/public/logo.png'
import { useRouter } from 'next/navigation'
import { User2,KeyRound } from 'lucide-react'
import axios from 'axios'




const Signinhandle = () => {
   

    const [data, setData] = useState([])
    const [user,setUser] =useState("")
    const [pwd,setPwd] =useState("")
    const [emptyUser,setEmptyUser] =useState('hidden')
    const [emptyPwd,setEmptyPwd] =useState('hidden')


    const onsubmit = async ()=>{
    
    await signIn('credentials',
{
username : user,
password : pwd,
redirect:true,
callbackUrl :'/'
})


}


const router = useRouter()

  const login = async () => { 
      
    if (user == ''){
      setEmptyUser('block')
      setEmptyPwd('hidden')
    }
    else if ( user !== '' && pwd == ""){
      setEmptyUser('hidden')
      setEmptyPwd('block')
    }
    else  if (user !== '' && pwd !== ""){
      setEmptyUser('hidden')
      setEmptyPwd('hidden')
      
      const result = await axios.get(`/users/getUser/${user}`)
      
                if(result){
            result.data.hash == pwd?router.push('/'): alert("Wrong password")
          }
          else{
            alert("Please Enter Correct User")
          }

    }
  };



  return (
  <div className='container'>

 
  <div className="w-screen h-screen overflow-clip flex flex-row relative  bg-slate-600 bg-blend-overlay justify-between  bg-cover bg-[url('../public/below.jpg')]">

<div className=' w-full flex flex-row  items-center justify-start absolute z-50  '>
   <div className=' w-3/6 flex items-center  justify-start '>
    <Image src={logo}  alt="logo" width={60} height ={60} className=' brightness-125 sm:w-26 sm:h-26 w-40 h-30'
     />
     <h1 className='text-blue-900  w-full  sm:text-3xl font-prompt text-xs md:text-xl lg:text-[1.3rem] font-bold bg-gradient-to-r from-green-100  to-yellow-100 bg-clip-text'> Rehman Munir Travels Faisalabad<span className='block ml-20 sm:ml-1 sm:inline'></span></h1>
     </div>
      </div>
        
        <div className='w-2/4'>
        <div className="w-[45%] h-[150%] rotate-25 bg-[url('../public/clouds.jpg')] rounded-r-full absolute -top-[25%] border-r-[20px] border-r-zinc-800 pl-20 border-t-blue-300 flex items-center justify-end bg-zinc-400 bg-blend-overlay bg-cover  ">
       
<div className="w-full h-[30%] flex items-start justify-center  ml-16 absolute left-[40%] bg-[url('../public/jet.png')]  bg-cover brightness-125   -rotate-6   "></div>

        </div>
        </div>

<div className='w-2/5  flex items-center justify-center'>
<div className='bg-slate-300 sm:w-3/4 md:w-3/6 lg:w-4/5 bg-opacity-90  h-4/6  p-10 pt-15 flex flex-col justify-center gap-3 rounded-md border-white  shadow-2xl shadow-slate-500'>

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

<p className ={`text-xs text-red-600 ${emptyUser} `}>Please Enter Password</p>
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


export default Signinhandle


