import React, { useMemo } from 'react'
import { useEffect, useState,useContext } from "react"

import { Button } from "@/components/ui/button"
// import axios from "axios"
// import { domainContext } from "@/app/contexts/dataproviders"
// import { useSession } from 'next-auth/react';


import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const LabelInput =(props)=>{ 
  return(<div className='flex flex-col items-center justify-center w-2/6 gap-1  text-pretty font-normal p-1 shadow-slate-500  '>
  <div className='flex items-start  justify-start rounded-md font-semibold  p-1 w-full sm:text-normal text-sm '>
    {props.label}</div>
  <input type={props.type} className='p-1 border border-slate-400 pl-4 rounded-md w-full text-slate-900 bg-slate-100'   value = {props.value} onChange={(e)=>props.setValue(e.target.value)}/>
</div>)
}





const Bookingform = (props) => {
// const ds = useContext(domainContext).base_url
// const {data} = useSession()
const today= new Date().toISOString().split("T")[0]

   const defaults= useMemo(()=>({
    agency:"",
    agent:"",
    email:"",
    phone:"",
    adult:"",
    child:"",
    infant:"",
    remarks:""
   }),[]) 
    
     const formData= useState(defaults)
     
      function transferOfficer(id,transferDetail,transferlog) {      
        try {
        axios.patch(`${ds}/web/user/transfer/${id}`, transferDetail
        )
        .then(() =>{ 
     
            alert(`---------Data Saved--------------`);
          axios.post(`${ds}/web/user/transferlog`,transferlog)
    
            })}
         catch (error) {
          console.log(error)
        }
        
      }   
 
    {

      const ticket = props.ticket
        const[transferMenuState,settransferMenuState] = useState("hidden")
//==========================================data

//--------------------------------------transfer details

   
        return (
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <button className="bg-blue-500 p-2 rounded-md hover:bg-slate-800 text-white">
                <span className="sr-only">Open menu</span>
                Book Now
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className={`bg-transparent w-screen flex items-center flex-col border-0 shadow-none ${!transferMenuState}`}
            >
              <DropdownMenuLabel className="bg-blue-400 w-11/12 rounded-md  text-center">
                {" "}
                Enter Booking Detail
              </DropdownMenuLabel>

            <div className='w-11/12 bg-slate-100'>
              {/* -------agency info */}
              <div className='flex gap-2 p-5'>
            <LabelInput type='text'label ='Agency' value = {formData.agency} setValue={(value)=>setData({...formData,agency:value})}/>

            <LabelInput type='text'label ='Agent' value = {formData.agent} setValue={(value)=>setData({...formData,agent:value})}/>

            <LabelInput type='text'label ='Email' value = {formData.email} setValue={(value)=>setData({...formData,email:value})}/>

            <LabelInput type='text'label ='Phone' value = {formData.phone} setValue={(value)=>setData({...formData,phone:value})}/>
            </div>
            {/* -------ticket info */}
            <div className='flex gap-2 p-5'>
            <LabelInput type='text'label ='Adult' value = {formData.adult} setValue={(value)=>setData({...formData,adult:value})}/>

            <LabelInput type='text'label ='Child' value = {formData.child} setValue={(value)=>setData({...formData,child:value})}/>

            <LabelInput type='text'label ='Infant' value = {formData.infant} setValue={(value)=>setData({...formData,infant:value})}/>

            <LabelInput type='text'label ='Remarks *' value = {formData.remarks} setValue={(value)=>setData({...formData,remarks:value})}/>
            </div>
            <div className='flex items-center p-4 justify-end w-full'>
              <button className='bg-blue-400  p-2  w-1/6 right-0 rounded-md'>Confirm</button>
            </div>
            </div>
            
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
}

export default Bookingform