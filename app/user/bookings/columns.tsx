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
import Link from "next/link";


export type rptCol = {
  airline:string
  depflyDate:string
  arvFlyDate:string
  sector:string
  adults:string
  children:string
  infants:string
  reserveDate:string
  bookingDate: string
  status:string
  grpid:string
  
  
  }


 
 


export const columns: ColumnDef<rptCol>[] = [
  {
    id: "airline",
   
    header:"Airline",
    cell:({row})=>{
      return(
        <div>
          <div className="text-center uppercase">{row.original.airline}</div>
        
          </div>
      )
    } },

    {
      id: "sector",
     
      header:"Group",
      cell:({row})=>{
        return(
          <div>
            <div className="flex items-center gap-2 justify-center uppercase">{row.original.sector}</div>
            </div>
        )
      } },
  {
    id: "date",
   
    header:"Dep/Arv",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center justify-center gap-2 mb-2"><FaPlaneDeparture size={20}/>{row.original.depflyDate?.split("T")[0].split("-").reverse
          ().join("-")}</div>
          <div className="flex items-center justify-center gap-2"><FaPlaneArrival size={20}/>{row.original.arvFlyDate?.split("T")[0].split("-").reverse
          ().join("-")}</div>
        </div>
      )
    } },

 
 
    {
      id: "adult",
     
      header:" Adult",
      cell:({row})=>{
        return(
          <div>
              <div className="flex items-center justify-arround pl-4 gap-2">{row.original.adults}</div>
          </div>
        )
      } },

        {
    id: "children",
   
    header:"Child",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center justify-center gap-2">{row.original.children}  </div>
        </div>
      )
    } },
    
    {
      id: "infant",
     
      header:"Infant",
      cell:({row})=>{
        return(
          <div>
            <div>{row.original.infants}</div>
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
        {
          id: "reserved",
         
          header:"Resv. Date",
          cell:({row})=>{
            return(
              <div>
                <div>{row.original.reserveDate?.split("T")[0].split("-").reverse
          ().join("-")} </div>
  
              </div>
            )
          } },
          {
            id: "confirmed",
           
            header:"Confrm Date",
            cell:({row})=>{
              return(
                <div>
                  <div>{row.original.bookingDate?.split("T")[0].split("-").reverse
          ().join("-")} </div>
    
                </div>
              )
            } },
        
      {
        id: "actions",
        enableHiding: false,
        header:"Actions",
        cell:({row})=>{
          return(
            <div className="flex gap-3  justify-center ">
             <Bookingform ticket = {row.original.grpid} />
             <Link  href={{
                    pathname: "/user/ticket",
                    query: {
                      group: row.original.grpid
                    },
                  }} className="bg-white rounded-md p-1 hover:bg-blue-800 hover:text-white hover:scale-125 shadow-lg shadow-slate-500 ">
              <HiOutlineTicket size={28} />
             </Link>
             <Link   href={{
                    pathname: "/user/invoice",
                    query: {
                      group: row.original.grpid
                    },
                  }} className="bg-white rounded-md p-1 hover:bg-blue-800 hover:text-white hover hover:scale-125 shadow-lg shadow-slate-500">
              <LiaFileInvoiceDollarSolid size={28} />
              
             </Link>
            </div>
          )
        }        
      },
      
      
  
]



