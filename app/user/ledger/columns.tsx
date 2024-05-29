import { ColumnDef} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

import { FaPlaneArrival,FaPlaneDeparture } from "react-icons/fa";
import { BsFillLuggageFill } from "react-icons/bs";
import { TbDeviceWatchDown,TbDeviceWatchUp } from "react-icons/tb";
import { MdWatchLater } from "react-icons/md";
import Link from "next/link";


import { RxCross1 } from "react-icons/rx";

export type rptCol = {

  title:string
  name:string
  depflydate:string
  payment:string
  price:string
  bookingdate:string
  pnr:string
  sector:string
  airline:string
  running_total:number
  

  }


 
 


export const columns: ColumnDef<rptCol>[] = [
  {
    header:"Date",
    cell:({row})=>{
      return(
        <div>
          <div>{row.original.bookingdate?.split("T")[0].split("-").reverse
  ().join("-")} </div>
  
        </div>
      )
    }
    
   },
  
   {
    header:"Airline",
    cell:({row})=>{
      return(
        <div className="uppercase">
          <div>{row.original.airline} </div>
  
        </div>
      )
    }
   },
  {
    header:"Sector",
    cell:({row})=>{
      return(
        <div className="uppercase">
          <div>{row.original.sector} </div>
  
        </div>
      )
    }
   },
   {
    header:"Pnr",
    cell:({row})=>{
      return(
        <div className="uppercase">
          <div>{row.original.pnr} </div>
  
        </div>
      )
    }
   },
   {
    header:"Title",
    cell:({row})=>{
      return(
        <div className="uppercase">
          <div>{row.original.title} </div>
  
        </div>
      )
    }
   },
 {
  header:"Name",
  cell:({row})=>{
    return(
      <div className="uppercase">
        <div>{row.original.name} </div>

      </div>
    )
  }
 },
 {
  header:"Travel Date",
  cell:({row})=>{
    return(
      <div>
        <div>{row.original.depflydate?.split("T")[0].split("-").reverse
().join("-")} </div>

      </div>
    )
  }
  
 },

 {
  header:"Amount Recieved ",
  accessorKey:"price"
 },
 {
  header: 'Running Total',
  cell:({row})=>{
    return(
      <div>
        <div>{row.original.running_total} </div>

      </div>
    )
  }
  }

 


      
      
  
]



