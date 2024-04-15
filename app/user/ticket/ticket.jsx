"use client";
import React, { useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// import axios from "axios";
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
// import brand from '../../../public/brand.png'
// import { ClassContext,SectionContext,spUnitContext,domainContext } from "@/app/datastore/dataprovider";

const Ticket = React.forwardRef((props, ref) => {
  const params = useSearchParams();
  const voucherDetail = params.get("voucherparams");
  const voucherData = JSON.parse(voucherDetail);
  const [vouchers, setvouchers] = useState();
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
    <div ref={ref} className="p-5 mb-10 bg-slate-100">
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

        <div className="flex items-center justify-between border rounded-md border-slate-400 p-4">
          <div className=" flex gap-2 flex-col">
            <div className=" text-green-600 flex gap-2 font-extrabold font-sans text-xl">
              <PiSealCheckFill size={30} /> Your Booking is Confirmed
            </div>
            <div>Thanks for Booking with us.</div>
            <div className="font-extrabold  text-lg bg-slate-200 rounded-lg px-2 w-fit py-1 ">
              Passenger Detail
            </div>
            <div>Hassan ul Jawad</div>
            <div>Primery Adult</div>
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

        <div className="border  rounded-md mt-5 ">
          <div className="bg-slate-100 p-2 text-sm flex flex-col items-start">
            
            Booking Refrence: 12321312
            <span className=" font-sans text-sm">Booking Date: 24-03-2024</span>{" "}
          </div>
          <div>
           
           <div className="p-5 text-sm mb-10">
            <div>Invoice: Rehman Munir travels LYP </div>
            <div>Rehman Munir Travels Lyp Rehman Munir 26 March 2024 </div>
            <div>P-161/2 MAIN CIRCULAR ROAD NEAR DISTRICT P.O. Box83000 LYP PK </div>

           </div>

            
          </div>
        </div>
        <div className="p-5 mb-20">
        Please get in touch with us for any assistance with your booking.
        <div>
          Phone: 0300000000 email:rehmanmunir@gmail.com
        </div>
        </div>
      </div>
    </div>
  );
});

Ticket.displayName = "Ticket";

export default Ticket;
