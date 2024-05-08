
"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { ImBin2 } from "react-icons/im";
import { VscClearAll } from "react-icons/vsc";
import { IoMdSave,IoIosPeople } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import ImgPicker from '@/components/ui/imagepicker'
import axios from 'axios'
import {getmaxid} from '@/function_lib/genral'



const LabelInput =(props)=>{ 
  return(<div className='flex flex-col items-start justify-center w-full  sm:w-2/5 gap-2 '>
  <div className='flex items-start justify-start rounded-md font-bold sm:w-56 w-28 sm:text-normal text-sm p-1'>{props.label}</div>
  <input type={props.type} className='p-1 pl-4 rounded-md w-full text-slate-900 bg-slate-100 border border-slate-500' maxLength={props.max}  value = {props.value} onChange={(e)=>props.setValue(e.target.value)}/>
</div>)
}

const Form = () => {

 
  const defaults = useMemo(()=>(
    {
      srNo:"",
      name:"",
      pwd:"",
      pwd2:"",
      gmail:"",
      contact:"",
      co:"",
      address:"",
      logo:"",
      role:"",
      status:"",
      addedBy:"",
      date:"",
      showSave :'block',
      showUpdate:'hidden'
  
  }
  ),[])

  const [data,setData]=useState(defaults)
  const today = new Date().toISOString().split("T")[0];
  //=============================
  const saveUser = async () => {
    if(data.name && data.gmail && data.address && data.contact) {
  
   
    const user = {
     
      role:'user',
      name:data.name,
      pwd:data.pwd2,
      contact :data.contact ,
      address:data.address,
      co:data.co,
      gmail:data.gmail,
      address:data.address,
      date: today,
      logo:data.logo,
      addedBy:"admin",
      status:"Active"
    }

      axios.post(`/api/users/saveUser`, 
      
  user

      ).then( response =>{
        
        if(response.statusText == "OK"){

          alert("User Created Successfully")

          reset()
        }
        else{
          alert("User not saved ")
        }
  
      }
      )
        } else {alert("Note: Please Fill All Fields");}
        }
//----------------reset
        const reset = async()=>{ 
          const response = await getmaxid('users',"id")
          setData({...defaults,srNo:response+1})
      
    }
//-------------------get user
const retriveData =async(id)=>{
 try{

   const response = await axios.get(`/api/users/userbyid/${id}`)
   if (response){
     
    
     const user = response.data[0]
     setData({...data,
      name:user.name,
      gmail:user.gmail,contact:user.contact,pwd:user.hash,pwd2:user.hash,address:user.address,co:user.co,logo:user.logo,showSave:'hidden',showUpdate:'block'
    })
  } else {
    alert("No user Found")
  }
  
}catch{
  alert("No user Found")
}
}

const updateuser =async(id)=>{
  if(data.name && data.gmail && data.address && data.contact) {

 
  const user = {
   
    role:'user',
    name:data.name,
    pwd:data.pwd2,
    contact :data.contact ,
    address:data.address,
    co:data.co,
    gmail:data.gmail,
    address:data.address,
    date: today,
    logo:data.logo,
    addedBy:"admin",
    status:"Active"
  }

    axios.patch(`/api/users/updateUser/${id}`, 
    
user
             
    
    ).then( response =>{
     
      if(response.statusText == "OK" ){

        alert("User Updated Successfully")

        reset()
      }
      else{
        alert("User not Updated ")
      }

    }
    )
      } else {alert("Note: Please Fill All Fields");}
      }
useEffect(()=>{
reset()
},[])
  return (
   <div className=' bg-gradient-to-br from-blue-200 pb-10  bg-green-100 flex flex-col items-center min-h-screen '>
<div className=' bg-gradient-to-bl text-3xl sm:text-5xl font-extrabold  to-purple-600 from-blue-800 bg-clip-text text-center p-10 text-transparent '>User Registration</div>

<div className='flex sm:flex-row flex-col items-center justify-center w-5/6 border border-white rounded-2xl shadow-lg shadow-slate-700 bg-white bg-opacity-75 gap-5 p-10  flex-wrap py-20'>

 <div className='w-5/6 pl-2 flex justify-between'>

<div>

 <div className='flex flex-col items-start justify-center w-full gap-2 '>
  <div className='flex items-start justify-start rounded-md font-bold sm:w-56 w-28 sm:text-normal text-sm p-1'>Reg No</div>
  <input type="text" className='p-1 pl-4 rounded-md w-full text-slate-900 bg-slate-100 border border-slate-500'   value = {data.srNo} onChange={(e)=>setData({...data,srNo:e.target.value})}
    onKeyPress={(e)=>{
                  
      if(e.key==="Enter"){
        retriveData(data.srNo)
       
      }      
     }
    }
  />
</div>

<div className='flex flex-col items-start mt-5 justify-center w-full   gap-2 '>
  <div className='flex items-start justify-start rounded-md font-bold sm:w-56 w-28 sm:text-normal text-sm p-1'>Logo</div>
  <div className='flex gap-5 border border-slate-500 rounded-md'>

  <ImgPicker  setter={(value) => setData({ ...data, logo: value })}/>

  </div>
</div>
</div>
<div className='h-40 w-40 bg-cover  border border-slate-900 bg-center  rounded-md' style={{ backgroundImage: `url(${data.logo})` }}></div>
</div>

<LabelInput type='text' label='Name' value = {data.name} setValue={(value)=>setData({...data,name:value})}/>

<LabelInput type='email' label='Gmail' value = {data.gmail} setValue={(value)=>setData({...data,gmail:value})}/>

<LabelInput type='text' label='Password' value = {data.pwd} setValue={(value)=>setData({...data,pwd:value})}/>

<LabelInput type='text' label='Confirm Password' value = {data.pwd2} setValue={(value)=>setData({...data,pwd2:value})}/>

<LabelInput type='number' max={13} label='Contact' value = {data.contact} setValue={(value)=>setData({...data,contact:value})}/>



<LabelInput type='text' label='C/O' value = {data.co} setValue={(value)=>setData({...data,co:value})}/>







<div className='flex flex-col items-start justify-start w-10/12  pl-2 gap-2'>
  <div className='flex items-center justify-start rounded-md font-bold  sm:w-56 w-28 h-full sm:text-normal text-sm p-1'>Address</div>
  <textarea cols={3} rows={3}   className='p-1 pl-4 rounded-md border border-slate-500 w-full text-slate-900 bg-slate-100 resize-none' 
  value = {data.address} onChange={(e)=>setData({...data,address:e.target.value})}/>

  </div>







<div>
<div className=' h-1/5 flex w-full items-center justify-center flex-wrap  gap-2  mt-10'>
               

                

                <button className=' pl-8 pr-10 py-2 rounded-md bg-slate-500 text-white w-36'type='button' onClick={()=>reset()}><div className='flex items-center'><VscClearAll className='size-5 mr-1'/> Reset</div></button>
                
                <button className={` pl-8 pr-10 py-2 rounded-md text-white bg-blue-800 w-36 ${data.showSave}`} type ='submit'
                onClick={()=>saveUser()}
                >
                  
                <div className='flex items-center'><IoMdSave  className='size-5 mr-1 ' /> Save</div>
                  
                  </button>      

                   <button className={` pl-8 pr-10 py-2 rounded-md text-white bg-green-800 w-36 ${data.showUpdate}
                   `}  type ='submit'
                onClick={()=>updateuser(data.srNo)}
                >
                  
                <div className='flex items-center'><IoMdSave  className='size-5 mr-1 ' /> Save</div>
                  
                  </button>             
                
            </div>
</div>
</div>

   </div>
  )
}

export default Form