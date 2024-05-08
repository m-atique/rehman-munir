"use client";
import Ticket from "./ledger";
import React, { useRef, useEffect, useState, useContext, useMemo } from "react";
import { useReactToPrint } from "react-to-print";
import { useSearchParams } from "next/navigation";
import DatePicker from "@/components/ui/datepicker";
import { FcPrint } from "react-icons/fc";
import { HiOutlinePrinter } from "react-icons/hi2";
import axios from "axios";
import { Selector } from "@/components/ui/selector";
import { Suspense } from "react";

const Options = [
  {
    label: "Confirmed",
    value: "Confirmed",
  },
  {
    label: "Cancel",
    value: "Cancel",
  },
  {
    label: "Reserved",
    value: "Reserved",
  },
];

const Fv = () => {
  // const params = useSearchParams();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // const voucherDetail = params.get("voucherparams");
  // const voucherData = JSON.parse(voucherDetail);

  const Today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(Today);
  const [endDate, setEndDate] = useState(Today);
  const [tktType, setTktType] = useState();

  const [ledgerData, setLedgerData] = useState();

  const getTickets = async () => {
    try {
      if (tktType != "") {
        const response = await axios.post(
          `/api/admreport/ticketbystatus/${tktType}`,
          {
            startDate: startDate,
            endDate: endDate,
          }
        );
        if (response) {
          const data = response.data;
          console.log(data);
          setLedgerData(data);
        } else {
          alert("Select Report  Type");
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex items-start justify-center w-screen bg-slate-200 h-screen">
      <div className="w-full">
        <div className=" flex justify-arround py-2 px-3 w-full  m-2 rounded-md">
          <div className=" flex items-end justify-center gap-8 w-3/4">
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />

            <div className="flex flex-col  text-center justify-end">
              {/* start date */}
              <label
                htmlFor="startdate"
                className="text-white  text-sm bg-blue-900 rounded-md mb-1"
              >
                Type
              </label>
              <div className="px-2 py-1 text-blue-800 font-semibold border rounded-md border-blue-800 bg-white">
                <Selector
                  data={Options}
                  value={tktType}
                  setValue={setTktType}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-10 items-end justify-end p-3 mr-10 w-1/4">
            <button
              onClick={() => getTickets()}
              className="bg-blue-800 h-10  rounded-md px-5 py-2 text-white"
            >
              Search
            </button>

            <button
              onClick={handlePrint}
              className="h-10 flex items-center justify-center rounded-md px-3  text-blue-900 "
            >
              <HiOutlinePrinter
                size={35}
                className=" shadow-black hover:scale-125"
              />
            </button>
          </div>
        </div>

        <div className="w-full  p-1 font-bold bg-gradient-to-bl from-purple-600 to-blue-600 bg-clip-text text-transparent text-5xl text-center mb-5">
          Admin Ledger
        </div>
        <Suspense fallback={()=>(<>Loading......</>)}>
        <Ticket ref={componentRef} tickets ={ledgerData} />
    </Suspense>
      </div>
    </div>
  );
};

export default Fv;
