import { ColumnDef} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

import { FaPlaneArrival,FaPlaneDeparture } from "react-icons/fa";
import { BsFillLuggageFill } from "react-icons/bs";
import { TbDeviceWatchDown,TbDeviceWatchUp } from "react-icons/tb";
import { MdWatchLater } from "react-icons/md";
import Link from "next/link";


import { RxCross1 } from "react-icons/rx";

export type rptCol = {
  agent:string
  title:string
  name:string
  surName:string
  payment:string
  price:string
  expiry:string 
  pnr:string
  }


 
 


export const columns: ColumnDef<rptCol>[] = [
  {
    header:"Pnr",
    accessorKey:"pnr"
   },
 {
  header:"Name",
  accessorKey:"name"
 },
 {
  header:"Sur Name",
  accessorKey:"surName"
 },

//  {
//   header:"Date of Birth",
//   cell:({row})=>{
//     return(
//       <div>
//         <div className="flex items-center justify-center gap-2 mb-2">{row.original.dob.split("T")[0].split("-").reverse().join("-")}</div>
        
//       </div>
//     )
//   } 
//  },
 {
  header:"Title",
  accessorKey:"title"
 },
 {
  header:"Agent ",
  accessorKey:"agent"
 },

 {
  header:"Amount Recieved ",
  accessorKey:"price"
 },
 {
  header:"Payment Satus ",
  accessorKey:"payment"
 },

//  {
//   header:"Passport exp",
//   cell:({row})=>{
//     return(
//       <div>
//         <div className="flex items-center justify-center gap-2 mb-2">{row.original.expiry.split("T")[0].split("-").reverse().join("-")}</div>
        
//       </div>
//     )
//   } 
//  },
 


      
      
  
]



