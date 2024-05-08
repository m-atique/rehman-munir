'use client'

import React,{useEffect,useState} from 'react'
import { columns } from "./columns";
import { DataTablewithFilters } from "@/components/ui/filtertable2";
import axios from 'axios';

const Reserveledger = () => {
const [ledgerData,setLedgerData] =useState()
  

const getTickets = async () => {
        try {
          const response = await axios.get(`/api/tickets/ticketbystatus/Reserved`);
          if (response) {
            const data = response.data;
    
            console.log(data)
            const agents = Array.from(new Set(data.map((item)=>item.agent)))

            const dataarray = agents.map((item,index)=>{ 
          
                const result = data.filter((x)=>x.agent===item)
               
                return (
                { 
                data : result,
                agent: result[0].agent,
              }
            )
          })
                setLedgerData(dataarray)
          }}
           catch (error) {
            console.log("error",error)
          }
        }

        useEffect(()=>{
            getTickets()
        },[ledgerData])
  return (
    <div className="w-full mb-20 flex justify-center  items-center bg-gradient-to-bl from-slate-200 to-slate-200 flex-col overflow-scroll">
    { ledgerData && 

ledgerData.map((item,index)=>(
    <div className='w-11/12 ' key={index}>
      <DataTablewithFilters columns={columns} data={item.data} airline={item.agent + " (" +  item.data[0].address+")"}/>
      </div>
    ))
}
  </div>
  )
}

export default Reserveledger