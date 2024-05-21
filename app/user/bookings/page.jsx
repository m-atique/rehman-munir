'use client'
import React, { useEffect,useMemo,useState } from 'react'
import Bookingfilter from '@/components/ui/bookingfilter'
import { Table } from '@/components/ui/table'
import { columns } from './columns';
import {DataTablewithFilters} from '@/components/ui/filtertable'
import axios from 'axios';
import { useSession } from 'next-auth/react';


const Options = [
  {
    label: "Confirmed",
    value: "Confirmed",
  },
  {
    label: "Cancel",
    value: "Cancel",
  },
  {
    label: "Reserved",
    value: "Reserved",
  },
];




const Groups = () => {
const today = new Date().toISOString().split("T")[0];
const {data} =useSession()
const defaults = useMemo(()=>({
 
}),[])





const [fmData,setfmData]=useState()
const [sectors,setsectors]=useState([])
const [statuses,setstatuses]=useState(Options)

const [selectedSector,setSelectedSector] =useState()
const [selectedStatus,setSelectedStatus] =useState()
const [date,setDate] =useState(today)


const getSectors = async () => {
  const sectorsData = await axios.get("/api/tickets/getSectors");
  const sector = sectorsData.data.map((item) => ({
    value: item.sector,
    label: item.sector,
  }));
  setsectors(sector);
};


const getDate =async()=>{
console.log("data", {
      id:data.user.id,
      date:date,
      sector:selectedSector
    })

  const response = await axios.post(`/api/userBooking/ticketbystatus/${selectedStatus}`,
    {
      id:data.user.id,
      date:date,
      sector:selectedSector
    }
  )
  console.log(response.data)
  setfmData(response.data)
}



useEffect(()=>{
  getSectors()
  
},[])
  return (
    <main className=' bg-gradient-to-br from-blue-200   via-slate-300 bg-blue-200 flex flex-col items-center min-h-screen '>
       <div className="flex flex-row justify-around items-center  bg-slate-100 p-3 w-full">

       <Bookingfilter  
       sectors = {sectors}
       statuses = {statuses}
       selectedSector= {selectedSector}
       selectedStatus= {selectedStatus}
       date ={date}
       setSelectedSector={setSelectedSector}
       setSelectedStatus ={setSelectedStatus}
       setDate = {setDate}
       
       
       />
  <div className="p-1">

<button
  className="bg-blue-900 text-white-900 rounded-md font-bold px-2 py-1 text-white border-2 border-blue-900 hover:bg-blue-800 hover:scale-105 transition "
  onClick={() => getDate()}
  >
  Search
</button>
    </div>
  </div>
  <div className='w-11/12'>
    {fmData && 
     <DataTablewithFilters columns={columns} data={fmData}/>
    }
  </div>

      </main>
  )
}

export default Groups