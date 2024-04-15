"use client"
import React, { useContext, useState,useEffect } from "react";
import { useSearchParams } from "next/navigation";
// import axios from "axios";
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
// import brand from '../../../public/brand.png'
// import { ClassContext,SectionContext,spUnitContext,domainContext } from "@/app/datastore/dataprovider";


const Invoice = React.forwardRef((props, ref) => {
  const params = useSearchParams()
  const voucherDetail  = params.get("voucherparams");
 const voucherData = JSON.parse(voucherDetail) 
 const [vouchers,setvouchers] =useState()
//  const ds = useContext(domainContext).base_url

 

//  useEffect(()=>{
//   const getVoucherData=()=>{
//     axios.get(`${ds}/fee/getfv/${voucherData.vgNo}`).then(
//       response=>{
//         setvouchers(response.data)
//       }
//     )
//    }
//   getVoucherData()
//  },[ds,voucherData.vgNo])

  return (
    <div ref={ref} className="p-2">
      <div className="w-[205mm] ">
      <div className="py-10 w-full flex items-center justify-between p-5 ">
          <div className="w-1/4">
            <Image
              src={logo}
              alt="logo"
              className="w-36 h-18 mr-2 brightness-105"
            />
          </div>
          <div className=" "><Barcode value ='fsxd123'/> </div>
        </div>

        <div className="border  rounded-md mt-5 ">
          <div className="bg-sky-200 p-2 text-lg flex gap-3 items-center">
            <PiAirplaneTakeoffLight
              size={35}
              className=" border-spacing-4 font-extralight "
            />{" "}
            Departure Flight{" "}
            <span className="font-extrabold font-sans">(FZEFDD&8)</span>{" "}
          </div>
          <div className="flex ">
           
            <div className="p-5 font-sans w-4/6">
              <div className="flex items-center justify-between ">
                <div className="font-[700] text-md">
                  Friday 24 September 2024
                </div>
                <div className="font-[700] text-md ">
                  Friday 24 September 2024
                </div>
              </div>
              <div className="flex justify-between py-5">
              <div className="font-extrabold text-3xl font-mono ">11:30</div>
              <div className=" font-mono flex items-center">------03 hours 40 min------</div>
              <div className="font-extrabold text-3xl font-sarif ">15:30</div>
              </div>

              <div className="flex justify-between py-2">
              <div className="font-bold text-3xl  ">FSD</div>
             
              <div className="font-bold text-3xl  ">DXB</div>
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
          <div className="w-4/6 ">
            <div className = 'p-2'>Passenger Name : Mr Muhammad Akram</div>
            <div className = 'p-2'>Passport : XDrt6788</div>
            <div className = 'p-2'>Payment: Rs 78000/-</div>
          </div>
          <div className="p-2 w-3/6 ">
            <div>Status : <span className="bg-green-400 rounded-md p-2 ">Confirmed</span></div>
            <div className="mt-5 w-full">Booking Date :<span className="rounded-md p-2">15-04-2024</span></div>
          </div>
          </div>
        </div>

        <div className="border border-slate-400 rounded-md flex mt-5">
          <div className=" p-2 w-1/6 bg-slate-200 font-extrabold flex items-center justify-center">
            <div className=" text-center">Travel Agent Info</div>
            </div>
          <div className="flex p-5 w-full ">
          <div className="w-4/6 ">
            <div className = 'p-2'> Name : Rehman Munir</div>
            <div className = 'p-2'>Address :  Faisal Abad</div>
            <div className = 'p-2'>Contact: 0300000000</div>
          </div>
          <div className="p-2 w-3/6 ">
          <div className="mt-5 w-full">Reservation Date :<span className="rounded-md p-2">15-04-2024</span></div>
            <div className="mt-5 w-full">Booking Date :<span className="rounded-md p-2">15-04-2024</span></div>
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
