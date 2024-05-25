import React, { useMemo } from 'react'
import { useEffect, useState,useContext } from "react"

import { Button } from "@/components/ui/button"
import axios from "axios"

import { useSession } from 'next-auth/react';
import {DataTablewithFilters} from '@/components/ui/filtertable'


import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { VscEye } from "react-icons/vsc";
import { columns } from './ticketInfo_colums'






const Bookingform = (props) => {

const {data} = useSession()
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
     

 
    

      const ticket = props.ticket
      const [ticketdata,setTicketdata]= useState([])
        const[transferMenuState,settransferMenuState] = useState("hidden")
//==========================================data
const getdata = async()=>{
 console.log({grpid:parseInt(ticket),userid:parseInt(data?.user.id)})
  const response = await axios.post('/api/userBooking/confirmedticket',{grpid:parseInt(ticket),userid:parseInt(data?.user.id)})

  setTicketdata(response.data)
}
//--------------------------------------transfer details
useEffect(()=>{
  getdata()

},[])
   
        return (
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
            <button className="bg-white rounded-md p-1 hover:bg-blue-800 hover:text-white hover:scale-125 shadow-lg shadow-slate-500 ">
              <VscEye size={28}   />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className={`bg-transparent w-screen  bg-opacity-60 flex items-center  flex-col border-0   justify-start pr-20 shadow-none ${!transferMenuState}`}
            >
              <div className=' bg-slate-50 rounded-md p-10 border-2 border-slate-500  '>

              <DropdownMenuLabel className="bg-blue-400 w-full  text-cente r">
                {" "}
                <div className='font-semibold text-2xl font-mono'>Booking Detail</div>
              </DropdownMenuLabel>

          <div className=' w-full bg-slate-100'> 
         
          
          <div className='flex w-full p-1'>
            {ticketdata &&

              <DataTablewithFilters columns={columns} data={ticketdata}/>
            }
            

          </div>
          </div>
            
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      
}

export default Bookingform