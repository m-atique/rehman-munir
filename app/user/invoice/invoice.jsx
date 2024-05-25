"use client"
import React, { useContext, useState,useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import logo from '../../../public/logo.png'
import Barcode from "react-barcode";
import { PiSealCheckFill } from "react-icons/pi";
import { GiCommercialAirplane } from "react-icons/gi";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LuPlaneTakeoff } from "react-icons/lu";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { SlHandbag } from "react-icons/sl";
import { useSession } from "next-auth/react";


const Invoice = React.forwardRef((props, ref) => {
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
    <div ref={ref} className="p-2">
      <div className="w-[205mm] ">
      <div className="py-5 w-full flex items-center justify-between p-5 ">
          <div className="w-1/4">
          {user && 
            <div className='h-40 w-40 bg-cover  bg-center  rounded-md' style={{ backgroundImage: `url(${user.logo})` }}></div>
          }
          </div>
          <div className=" "><Barcode value ='fsxd123'/> </div>
        </div>

        <div className="border  rounded-md  ">
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
              <div className=" font-mono flex items-center">----------------</div>
              <div className="font-extrabold text-3xl font-sarif ">{ticketdata &&  ticketdata[0].deplandtime.slice(0,5)}</div>
              </div>

              <div className="flex justify-between  uppercase py-2">
              <div className="font-bold text-3xl  ">{ticketdata &&  ticketdata[0].sector.split("-")[0]}</div>
             
              <div className="font-bold text-3xl uppercase  ">{ticketdata &&  ticketdata[0].sector.split("-")[1]}</div>
              </div>
            </div>
            <div className="p-5 text-sm  border-dotted border-l-2 border-slate-600">
              <div className="flex gap-2 mb-4"><SlHandbag size={15}/>7 kg hand laugage included</div>
              <div className="flex gap-2 mb-4"><MdOutlineAirlineSeatReclineExtra size={17}/>Un assigned</div>
              <div className="flex gap-2 mb-4">< GrShieldSecurity size={15}/>No insurance</div>
            </div>
            
          </div>
        </div>

        <div className="border border-slate-400 rounded-md flex mt-5">
          <div className=" p-2 w-1/6 bg-slate-200 font-extrabold flex items-center justify-center">
            <div className=" text-center">Payment Information</div>
            </div>
          <div className="flex p-5 w-full ">
            <div className="w-3/5">
          {ticketdata &&  ticketdata.map((item,index)=>(
            <div  key={index} className="w-full flex flex-col  border border-black  rounded-md  bg-slate-200 p-1 mb-2">
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
                      Payment
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
                      {item.price}
                    </td>
                   
                  </tr>
                </tbody>
               
              </table>

            </div>
          ))
            
          }
          </div>
          <div className="w-2/4 flex p-4 items-end justify-start flex-col pl-5  ">
            <div>
            <div  className="w-full">Status : <span className="bg-green-400 rounded-md p-2 ">Confirmed</span></div>
            <div className="mt-5 w-full">Booking Date :<span className="rounded-md p-2">{ticketdata &&  ticketdata[0].bookingDate.split("T")[0].split("-").reverse().join("-")}</span></div>
            </div>
          </div>
          </div>
          
        </div>

        <div className="border border-slate-400 rounded-md flex mt-5">
          <div className=" p-2 w-1/6 bg-slate-200 font-extrabold flex items-center justify-center">
            <div className=" text-center">Travel Agent Info</div>
            </div>
          <div className="flex p-5 w-full ">
          {user && 
          <div className="w-4/6 ">
            <div className = 'p-2'> Name : {user.name}</div>
            <div className = 'p-2'>Address :  {user.address}</div>
            <div className = 'p-2'>Contact: {user.contact}</div>
          </div>
          }
          <div className="p-2 w-3/6 ">
          <div className="mt-5 w-full">Reservation Date :<span className="rounded-md p-2">{ticketdata &&  ticketdata[0].reserveDate.split("T")[0].split("-").reverse().join("-")}</span></div>
            <div className="mt-5 w-full">Booking Date :<span className="rounded-md p-2">{ticketdata &&  ticketdata[0].bookingDate.split("T")[0].split("-").reverse().join("-")}</span></div>
          </div>
          </div>
        </div>

        <div>
        <div className="font-extrabold p-2">TERM & CONDITION:</div>
<div>
  1- PASSENGER SHOULD REPORT AT CHECK IN COUNTER AT LEAST 0400 HOURS PRIOR TO FLIGHT.
  </div> 2- TICKETS ARE NON REFUNDABLE AND NON CHANGEABLE ANY TIME.
        </div>
      </div>
    </div>
  );
});

Invoice.displayName="Invoice"

export default Invoice;
