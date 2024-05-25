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
  title:string
  name:string
  surname:string
  dob:string
  expiry:string
  passport:string
  price:string

  status:string
  
  
  }


 
 


export const columns: ColumnDef<rptCol>[] = [
  {
    id: "Given Name",
   
    header:"Given Name",
    cell:({row})=>{
      return(
        <div>
          <div className="text-center">{row.original.name}</div>
        
          </div>
      )
    } },

    {
      id: "surname",
     
      header:"Sur Name",
      cell:({row})=>{
        return(
          <div>
            <div className="flex items-center gap-2 justify-center">{row.original.surname}</div>
            </div>
        )
      } },

 
 
    {
      id: "titile",
     
      header:" Title",
      cell:({row})=>{
        return(
          <div>
              <div className="flex items-center justify-arround pl-4 gap-2">{row.original.title}</div>
          </div>
        )
      } },

        {
    id: "dob",
   
    header:"DOB",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center justify-center gap-2">{row.original.dob.split("T")[0].split("-").reverse().join("-")}  </div>
        </div>
      )
    } },
    
    {
      id: "doe",
     
      header:"DOE",
      cell:({row})=>{
        return(
          <div>
            <div>{row.original.expiry.split("T")[0].split("-").reverse().join("-")}</div>
          </div>
        )
      } },
      

        {
          id: "passport",
         
          header:"Passport",
          cell:({row})=>{
            return(
              <div>
                <div>{row.original.passport} </div>
  
              </div>
            )
          } },
         

            {
              accessorKey: "price",
              header: ({ table })=>{
                const result =table.getFilteredRowModel()
                .rows.reduce((total,row)=>total+Number(row.getValue("price")),0)
                return (
                  <div>Fare:<span className="font-bold bg-slate-300 text-black rounded-sm px-2 block">Total : {result}</span> </div>
                )
                
                },
              
            },


          {
            id: "confirmed",
           
            header:"Confrm Date",
            cell:({row})=>{
              return(
                <div>
                  <div>{row.original.status} </div>
    
                </div>
              )
            } },
        
           
      
      
  
]



