import { ColumnDef} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import  Bookingform  from "./bookingform"
import { FaPlaneArrival,FaPlaneDeparture } from "react-icons/fa";
import { BsFillLuggageFill } from "react-icons/bs";
import { TbDeviceWatchDown,TbDeviceWatchUp } from "react-icons/tb";
import { MdWatchLater } from "react-icons/md";

export type rptCol = {
  depFlyDate:string
  givenName:string
  arvFlyDate:string
  // depFlight:string
  flightNo:string
  sector:string
  arrivalOrigin:string
  depTime:string
  arrivalTime: string
  bag:string
  handBag:string
  meal:string
  sale:string
  
  }


 
 


export const columns: ColumnDef<rptCol>[] = [
  {
    id: "date",
   
    header:"Date",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center justify-center gap-2 mb-2"><FaPlaneDeparture size={20}/>{row.original.depFlyDate}</div>
          <div className="flex items-center justify-center gap-2"><FaPlaneArrival size={20}/>{row.original.depFlyDate}</div>
        </div>
      )
    } },
    {
      id: "givenName",
     
      header:"Name",
      cell:({row})=>{
        return(
          <div>
            <div className="flex items-center justify-center gap-2">{row.original.givenName}  </div>
          </div>
        )
      } },

    {
      id: "flight",
     
      header:"Flight",
      cell:({row})=>{
        return(
          <div>
            <div className="text-center">{row.original.depFlight}</div>
            <div className="text-center">{row.original.arrivalFlight}</div>
            </div>
        )
      } },

      {
        id: "origin",
       
        header:"Origin",
        cell:({row})=>{
          return(
            <div>
              <div className="flex items-center gap-2 justify-center">{row.original.depOrigin}</div>
              <div className="flex items-center gap-2 justify-center">{row.original.arrivalOrigin}</div>
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
 size={20}/>{row.original.depTime.split("-")[0]}</div>
          <div className="flex items-center justify-arround pl-4  gap-2"><MdWatchLater size={20}/>{row.original.arrivalTime.split("-")[0]}</div>
        </div>
      )
    } },
    {
      id: "time",
     
      header:" Arrival Time",
      cell:({row})=>{
        return(
          <div>
              <div className="flex items-center justify-arround pl-4 gap-2"><MdWatchLater size={20}/>{row.original.depTime.split("-")[1]}</div>
          <div className="flex items-center justify-arround pl-4 gap-2"><MdWatchLater size={20}/>{row.original.arrivalTime.split("-")[1]}</div>
          </div>
        )
      } },

        {
    id: "bag",
   
    header:"Bag",
    cell:({row})=>{
      return(
        <div>
          <div className="flex items-center justify-center gap-2"><BsFillLuggageFill size={20}/>{row.original.bag}  + {row.original.handCarry} kg </div>
        </div>
      )
    } },
    
    {
      id: "meal",
     
      header:"Meal",
      cell:({row})=>{
        return(
          <div>
            <div>{row.original.meal}</div>
          </div>
        )
      } },
      
      {
        id: "fare",
       
        header:"Fare",
        cell:({row})=>{
          return(
            <div>
              <div>{row.original.fare} PKR/-</div>

            </div>
          )
        } },
        
      {
        id: "actions",
        enableHiding: false,
        header:"Actions",
        cell:({row})=>{
          return(
            <div>
              <Bookingform />
            </div>
          )
        }        
      },
      
      
  
]



