"use client";

import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { useSession } from "next-auth/react";
import DatePicker from "@/components/ui/datepicker";
import { HiOutlinePrinter } from "react-icons/hi2";
import { DataTablewithFilters } from "@/components/ui/filtertable";
import { columns } from "./columns";

const Ticket = React.forwardRef((props, ref) => {
  const tickets = props.tickets;
  const dates = props.dates;
  const [width, setWidth] = useState("w-11/12");
  const componentRef = useRef();
  const { data } = useSession();

  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split("T")[0]);
  const [tktType, setTktType] = useState("confirmed");
  const [pgwidth, setPgwidth] = useState("w-11/12");
  const [ledgerData, setLedgerData] = useState(null);
  const [isPrintReady, setIsPrintReady] = useState(false);

  const getTickets = async () => {
    try {
      if (tktType !== "") {
        const response = await axios.post(`/api/users/ledger/${tktType}`, {
          startDate: startDate,
          endDate: endDate,
          userid: data?.user.id,
        });
        if (response) {
          const data = response.data;
          setLedgerData(data);
        } else {
          alert("Select Report Type");
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      setPgwidth("w-[205mm]");
      setIsPrintReady(true);
      return new Promise((resolve) => {
        setTimeout(resolve, 500); // Wait for the state to update
      });
    },
    onAfterPrint: () => {
      setPgwidth("w-11/12");
      setIsPrintReady(false);
    },
    onPrintError: () => {
      setPgwidth("w-11/12");
      setIsPrintReady(false);
    },
  });

  // useEffect(() => {
  //   if (isPrintReady) {
  //     handlePrint();
  //   }
  // }, [isPrintReady]);

  return (
    <div>
      <div className="flex justify-around py-2 px-3 w-full m-2 rounded-md">
        <div className="flex items-end justify-center gap-8 w-3/4">
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
        <div className="flex gap-10 items-end justify-end p-3 mr-10 w-1/4">
          <button
            onClick={getTickets}
            className="bg-blue-800 h-10 rounded-md px-5 py-2 text-white"
          >
            Search
          </button>
          <button
            onClick={handlePrint} // Trigger the print process
            className="h-10 flex items-center justify-center rounded-md px-3 text-blue-900"
          >
            <HiOutlinePrinter size={35} className="shadow-black hover:scale-125" />
          </button>
        </div>
      </div>
      <div ref={componentRef} className="p-5 mb-10 bg-slate-100 flex justify-center">
        <div className={`${pgwidth}`}>
          <div className="w-full p-1 font-bold bg-gradient-to-bl from-purple-600 to-blue-600 bg-clip-text text-transparent text-3xl text-center">
            Agent Sales Ledger
          </div>
          <div className="flex flex-row w-full justify-between pt-5 items-center">
            <div className="text-center text-xl flex items-start">
              Agency: <span className="bg-slate-300 px-3 rounded-md">{ledgerData && ledgerData[0].agent}</span>
            </div>
            <div>
              Date: {startDate.split("-").reverse().join("-")} -to- {endDate.split("-").reverse().join("-")}
            </div>
          </div>
          {ledgerData && (
            <>
              <DataTablewithFilters data={ledgerData} columns={columns} />
              <div className="w-full bg-slate-200 font-extrabold p-1 flex justify-between border border-black mt-2">
                <div className="text-center w-2/4">Total</div>
                <div className="px-1">PKR {ledgerData[ledgerData.length - 1].running_total}/-</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

Ticket.displayName = "Ticket";

export default Ticket;
