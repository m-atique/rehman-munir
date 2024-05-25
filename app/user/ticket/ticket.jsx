"use client";
import React, { useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { PiSealCheckFill } from "react-icons/pi";
import { GiCommercialAirplane } from "react-icons/gi";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LuPlaneTakeoff } from "react-icons/lu";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { SlHandbag } from "react-icons/sl";
import Barcode from 'react-barcode';
import { useSession } from "next-auth/react";
// import brand from '../../../public/brand.png'
// import { ClassContext,SectionContext,spUnitContext,domainContext } from "@/app/datastore/dataprovider";

const Ticket = React.forwardRef((props, ref) => {
  const {data}= useSession()
  const id = data?.user.id
  const params = useSearchParams();
  const voucherDetail = params.get("voucherparams");
  const voucherData = JSON.parse(voucherDetail);
  const [vouchers, setvouchers] = useState();

 const [ticketdata,setTicketData] = useState()
 const [user,setUser] =useState()


//==========================================data
const getdata = async()=>{
  console.log({grpid:parseInt(props.group),userid:parseInt(data?.user.id)})
   const response = await axios.post('/api/userBooking/printticket',{grpid:parseInt(props.group),userid:parseInt(data?.user.id)})
 console.log(response.data)
  setTicketData(response.data)
 }

 const getuser = async()=>{
  console.log({grpid:parseInt(props.group),userid:parseInt(data?.user.id)})
  const response = await axios.get(`/api/users/userbyid/${id}`)
 
  setUser(response.data)
 }

 //--------------------------------------transfer details
 useEffect(()=>{
   getdata()
   getuser()
 
 },[])



  return (
    <div ref={ref} className="p-5 mb-10 bg-slate-100">
      <div className="w-[205mm] ">
        <div className="py-10 w-full flex items-center justify-between p-5 ">
          <div className="w-1/4">
          {user && 
            <div className='h-40 w-40 bg-cover  bg-center  rounded-md' style={{ backgroundImage: `url(${user.logo})` }}></div>
          }
          </div>
          <div className=" "><Barcode value ="asas122"/> </div>
        </div>

        <div className="flex items-center justify-between border rounded-md border-slate-400 p-4">
          <div className=" flex gap-2 flex-col">
            <div className=" text-green-600 flex gap-2 font-extrabold font-sans text-xl">
              <PiSealCheckFill size={30} /> Your Booking is Confirmed
            </div>
            <div>Thanks for Booking with us</div>
            <div className="font-extrabold  text-lg bg-slate-200 rounded-lg px-2 w-fit py-1 ">
              Passengers Detail
            </div>
          {ticketdata &&  ticketdata.map((item,index)=>(
            <div key={index}  className="w-full flex flex-col bg-slate-200 p-1 rounded-sm">
               <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-slate-300 w-1/5  border-slate-600 text-center">
                      Name
                    </th>
                    <th className="bg-slate-300 w-1/5  border-slate-600 text-center">
                      Passport
                    </th>
                    <th className="bg-slate-300 w-1/5  border-slate-600 text-center">
                      Status
                    </th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" py-1 bg-slate-200 w-1/5  border-slate-600 text-center">
                      {item.title +" "+item.name}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5  border-slate-600 text-center">
                      {item.passport}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5  border-slate-600 text-center">
                      {item.status}
                    </td>
                   
                  </tr>
                </tbody>
               
              </table>

            </div>
          ))
            
          }
          </div>
          <div>
            <div>Booking Refrence</div>
            <div>123123hjhdasd</div>
          </div>
        </div>

        <div className="border  rounded-md mt-5 ">
          <div className="bg-sky-200 p-2 text-lg flex gap-3 items-center">
            <PiAirplaneTakeoffLight
              size={35}
              className=" border-spacing-4 font-extralight "
            />{" "}
            Departure Flight{" "}
            <span className="font-extrabold font-sans">({ticketdata &&  ticketdata[0].flightno})</span>{" "}
          </div>
          <div className="flex ">
           
            <div className="p-5 font-sans w-4/6">
              <div className="flex items-center justify-between ">
                <div className="font-[700] text-md">
                {ticketdata &&  ticketdata[0].depflyDate?.split("T")[0].split("-").reverse().join("-")}
                </div>
                <div className="font-[700] text-md ">
                {ticketdata &&  ticketdata[0].deplanddate.split("T")[0].split("-").reverse().join("-")}
                </div>
              </div>
              <div className="flex justify-between py-5">
              <div className="font-extrabold text-3xl font-mono ">{ticketdata &&  ticketdata[0].depflytime.slice(0,5)}</div>
              <div className=" font-mono flex items-center">------------</div>
              <div className="font-extrabold text-3xl font-sarif ">{ticketdata &&  ticketdata[0].deplandtime.slice(0,5)}</div>
              </div>

              <div className="flex justify-between py-2">
              <div className="font-bold text-3xl  ">{ticketdata &&  ticketdata[0].sector.split("-")[0]}</div>
             
              <div className="font-bold text-3xl  ">{ticketdata &&  ticketdata[0].sector.split("-")[1]}</div>
              </div>
            </div>
            <div className="p-5 text-sm  border-dotted border-l-2 border-slate-600">
              <div className="flex gap-2 mb-4"><SlHandbag size={15}/>7 kg hand laugage included</div>
              <div className="flex gap-2 mb-4"><MdOutlineAirlineSeatReclineExtra size={17}/>Un assigned</div>
              <div className="flex gap-2 mb-4">< GrShieldSecurity size={15}/>No insurance</div>
            </div>
            
          </div>
        </div>

        <div className="border  rounded-md mt-5 ">
          <div className="bg-slate-100 p-2 text-sm flex flex-col items-start">
            
            Booking Refrence: 12321312
            <span className=" font-sans text-sm">Booking Date:{ticketdata &&  ticketdata[0].bookingDate.split("T")[0].split("-").reverse().join("-")}</span>{" "}
          </div>
          <div>
           {user && 
           <div className="p-5 text-sm mb-10">
            <div>Invoice:{user.name} </div>
            <div>Address: {user.address} </div>
            

           </div>
          }

            
          </div>
        </div>
        {user && 
        <div className="p-5 mb-20">
        Please get in touch with us for any assistance with your booking.
        <div>
          Phone: {user.contact} email:{user.gmail}
        </div>
        </div>
}
      </div>
    </div>
  );
});

Ticket.displayName = "Ticket";

export default Ticket;
