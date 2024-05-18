import { ColumnDef} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import  Bookingform  from "./booking/page"
import { FaPlaneArrival,FaPlaneDeparture } from "react-icons/fa";
import { BsFillLuggageFill } from "react-icons/bs";
import { TbDeviceWatchDown,TbDeviceWatchUp } from "react-icons/tb";
import { MdWatchLater } from "react-icons/md";
import Link from "next/link";

export type rptCol = {
  depflydate:string
  arvflydate:string
  givenname:string
  flightno:string
  returnflightno:string
  sector:string
  returnsector:string
  depflytime:string
  deplandtime:string
  arvflytime:string
  arvlandtime:string
  bag:string
  handBag:string
  meal:string
  sale:string

  
  }


 
 


export const columns: ColumnDef<rptCol>[] = [
  // {
  //   id: "tgroup",
   
  //   header:"group",
  //   cell:({row})=>{
  //     return(
  //       <div>
  //         <div>{row.original.tgroup} PKR/-</div>

  //       </div>
  //     )
  //   } },
  {
    id: "date",
   
    header:"Date",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center justify-center gap-2 min-w-max mb-2"><FaPlaneDeparture size={20}/>{row.original.depflydate?.split("T")[0].split("-").reverse().join("-")}</div>
          {row.original.arvflydate &&
          <div className="flex items-center justify-center gap-2 min-w-max"><FaPlaneArrival size={20}/>{row.original.arvflydate?.split("T")[0].split("-").reverse().join("-")}</div>
    }
        </div>
      )
    } },
    {
      id: "givenName",
     
      header:"Name",
      cell:({row})=>{
        return(
          <div>
            <div className="flex items-center justify-center capitalize gap-2">{row.original.givenname}  </div>
          </div>
        )
      } },

    {
      id: "flight",
     
      header:"Flight",
      cell:({row})=>{
        return(
          <div>
            <div className="text-center uppercase">{row.original.flightno}</div>
            {row.original.returnflightno &&
            <div className="text-center uppercase">{row.original.returnflightno}</div>
            }
            </div>
        )
      } },

      {
        id: "origin",
       
        header:"Origin",
        cell:({row})=>{
          return(
            <div>
              <div className="flex items-center gap-2 justify-center uppercase">{row.original.sector}</div>
              {row.original.returnsector &&
              <div className="flex items-center gap-2 justify-center uppercase">{row.original.returnsector}</div>
            }
              </div>
          )
        } },
  {
    id: "deptime",
   
    header:"Dep Time",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center  justify-arround pl-4 gap-2"><MdWatchLater
 size={20}/>{row.original.depflytime?.slice(0,5)}</div>
            {row.original.arvflytime &&
          <div className="flex items-center justify-arround pl-4  gap-2"><MdWatchLater size={20}/>{row.original.arvflytime?.slice(0,5)}</div>
          }
        </div>
      )
    } },
    {
      id: "time",
     
      header:" Arrival Time",
      cell:({row})=>{
        return(
          <div>
              <div className="flex items-center justify-arround pl-4 gap-2"><MdWatchLater size={20}/>{row.original.deplandtime?.slice(0,5)}</div>
              { row.original.arvlandtime &&

                <div className="flex items-center justify-arround pl-4 gap-2"><MdWatchLater size={20}/>{row.original.arvlandtime?.slice(0,5)}</div>
              }
          </div>
        )
      } },

        {
    id: "bag",
   
    header:"Bag",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center justify-center gap-2"><BsFillLuggageFill size={20}/>{row.original.bag?row.original.bag:0}  + {row.original.handBag?row.original.handBag:0} kg </div>
        </div>
      )
    } },
    
    {
      id: "meal",
     
      header:"Meal",
      cell:({row})=>{
        return(
          <div>
            <div className="uppercase">{row.original.meal}</div>
          </div>
        )
      } },
      
      {
        id: "sale",
       
        header:"Fare",
        cell:({row})=>{
          return(
            <div>
              <div>{row.original.sale} PKR/-</div>

            </div>
          )
        } },
        
      {
        id: "actions",
        enableHiding: false,
        header:"Actions",
        cell:({row})=>{
          const currentTicket = row.original
          return(
            <div>
             <Link  
              href={{
                pathname: "/user/groups/booking",
                query: {
                  currentTicket: JSON.stringify(currentTicket)
                },
              }}
             
            className=" text-blue-900 hover:bg-blue-900  border-2 border-blue-900 hover:text-white  rounded-md p-2  shadow shadow-slate-300">Book Now </Link>
            </div>
          )
        }        
      },
      
      
  
]



