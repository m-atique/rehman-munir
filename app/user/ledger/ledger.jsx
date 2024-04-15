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
import { DataTablewithFilters } from "@/components/ui/ledgertable";
import { columns } from './columns';
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
    <div className="flex  flex-col items-start justify-center">

      <div className="flex flex-col w-full justify-center items-center">
        <div className="text-center text-3xl mb-10 border-b border-black ">Reman Munir Trevals Faisalabad</div>
        <div className="text-center text-3xl w-2/4 bg-slate-300 p-2 rounded-md"> Agent Sales Ledger</div>
       
      </div>
       <div className="flex flex-row w-full justify-between py-10 items-center">
      <div className="text-center text-xl">Agency:  <span className="bg-slate-300 px-3 p-1 rounded-md">Tariq Travels Faisalabad</span> </div>
      <div> Date : 01-03-2024 to 05-04-2024   </div>
      </div>
    <div className="w-full  flex items-center justify-center">
      <DataTablewithFilters columns={columns} data={[]}/>

    </div>
    </div>
      </div>
    </div>
  );
});

Invoice.displayName="Invoice"

export default Invoice;
