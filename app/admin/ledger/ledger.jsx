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
import { DataTablewithFilters } from "@/components/ui/filtertable";
import { columns } from "../ledger/columns";



const Ticket = React.forwardRef((props, ref) => {

  const tickets  = props.tickets


  return (
    <div ref={ref} className="p-5 mb-10 bg-slate-100 flex justify-center">
      <div className="w-[205mm] ">
        <div className=" flex text-center justify-center   w-full font-bold text-2xl ">
        Rehman Munir Travels Faisalabad
          </div>
          {tickets &&

            <DataTablewithFilters data={tickets} columns={columns}/>
          }
      </div>
    </div>
  );
});

Ticket.displayName = "Ticket";

export default Ticket;
