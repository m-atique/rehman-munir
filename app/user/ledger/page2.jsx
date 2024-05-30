"use client";
import Ticket from "./page";
import React, { useRef, useEffect, useState, useContext, useMemo } from "react";
import { useReactToPrint } from "react-to-print";
import { Suspense } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import DatePicker from "@/components/ui/datepicker";
import { FcPrint } from "react-icons/fc";
import { HiOutlinePrinter } from "react-icons/hi2";
import { Selector } from "@/components/ui/selector";

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

//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => {
//       // Call setValue here
//       setPgwidth('w-[205mm]');
//       return componentRef.current;
//     },
//   });
// const {data} = useSession()

//   const Today = new Date().toISOString().split("T")[0];
//   const [startDate, setStartDate] = useState(Today);
//   const [endDate, setEndDate] = useState(Today);
//   const [tktType, setTktType] = useState();
//   const [pgwidth,setPgwidth]=useState("w-11/12")
//   const [ledgerData, setLedgerData] = useState();

//   const getTickets = async () => {
//     try {
//       if (tktType != "") {
//         const response = await axios.post(
//           `/api/users/ledger/${tktType}`,
//           {
//             startDate: startDate,
//             endDate: endDate,
//             userid:data?.user.id
//           }
//         );
//         if (response) {
//           const data = response.data;
//           setLedgerData(data);
//         } else {
//           alert("Select Report  Type");
//         }
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

  useEffect(() => {}, []);

  return (
    <div className="flex items-start justify-center w-screen bg-slate-200 h-screen">
      <div className="w-full">
        {/* <div className=" flex justify-arround py-2 px-3 w-full  m-2 rounded-md">
          <div className=" flex items-end justify-center gap-8 w-3/4">
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />

           
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
        </div> */}

       
        {/* <Suspense fallback={()=>(<>Loading......</>)}>
        

        <Ticket ref={componentRef} tickets ={ledgerData} dates ={{startDate:startDate,endDate:endDate}}  />
       
    </Suspense> */}
      </div>
    </div>
  );
};

export default Fv;
