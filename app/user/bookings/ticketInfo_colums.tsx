import { ColumnDef} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import  Bookingform  from "./bookingform"
import { FaPlaneArrival,FaPlaneDeparture } from "react-icons/fa";
import { BsFillLuggageFill } from "react-icons/bs";
import { TbDeviceWatchDown,TbDeviceWatchUp } from "react-icons/tb";
import { MdWatchLater } from "react-icons/md";
import { VscEye } from "react-icons/vsc";
import { HiTicket,HiOutlineTicket } from "react-icons/hi2";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

export type rptCol = {
  airline:string
  depDate:string
  arrivalDate:string
  sector:string
  adult:string
  child:string
  infant:string
  reservedDate:string
  confirmedDate: string
  status:string
  
  
  }


 
 


export const columns: ColumnDef<rptCol>[] = [
  {
    id: "airline",
   
    header:"Airline",
    cell:({row})=>{
      return(
        <div>
          <div className="text-center">{row.original.airline}</div>
        
          </div>
      )
    } },

    {
      id: "sector",
     
      header:"Group",
      cell:({row})=>{
        return(
          <div>
            <div className="flex items-center gap-2 justify-center">{row.original.sector}</div>
            </div>
        )
      } },
  {
    id: "date",
   
    header:"Dep/Arv",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center justify-center gap-2 mb-2"><FaPlaneDeparture size={20}/>{row.original.depDate}</div>
          <div className="flex items-center justify-center gap-2"><FaPlaneArrival size={20}/>{row.original.depDate}</div>
        </div>
      )
    } },

 
 
    {
      id: "adult",
     
      header:" Adult",
      cell:({row})=>{
        return(
          <div>
              <div className="flex items-center justify-arround pl-4 gap-2">{row.original.adult}</div>
          </div>
        )
      } },

        {
    id: "child",
   
    header:"Child",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center justify-center gap-2">{row.original.child}  </div>
        </div>
      )
    } },
    
    {
      id: "infant",
     
      header:"Infant",
      cell:({row})=>{
        return(
          <div>
            <div>{row.original.infant}</div>
          </div>
        )
      } },
      

        {
          id: "reserved",
         
          header:"Resv. Date",
          cell:({row})=>{
            return(
              <div>
                <div>{row.original.reservedDate} </div>
  
              </div>
            )
          } },
          {
            id: "confirmed",
           
            header:"Confrm Date",
            cell:({row})=>{
              return(
                <div>
                  <div>{row.original.confirmedDate} </div>
    
                </div>
              )
            } },
        
            {
              id: "status",
             
              header:"Status",
              cell:({row})=>{
                return(
                  <div>
                    <div>{row.original.status} </div>
      
                  </div>
                )
              } },
      
      
  
]



