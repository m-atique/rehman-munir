import React, { useMemo } from 'react'
import { useEffect, useState,useContext } from "react"

import { Button } from "@/components/ui/button"
// import axios from "axios"
// import { domainContext } from "@/app/contexts/dataproviders"
// import { useSession } from 'next-auth/react';
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





const data = [
  {
    depDate: "2024-12-12",
    reservedDate: "2024-12-16",
    confirmedDate: "2024-12-16",
    airline: "air blue",
    sector: "JDH-PAK",
    adult: "3",
    child: "2",
    infant: "1",
    status: "Confirmed",

  },
  
];



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
            
              <DataTablewithFilters columns={columns} data={data}/>
            

          </div>
          </div>
            
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
}

export default Bookingform