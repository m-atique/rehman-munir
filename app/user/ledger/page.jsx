"use client"
// import Invoice from './ledger'
import React, { useRef, useContext,useMemo} from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';
import DatePicker from "@/components/ui/datepicker";
import axios from 'axios';


const Fv = () => {
  // const params = useSearchParams()

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    // const voucherDetail  = params.get("voucherparams");
    // const voucherData = JSON.parse(voucherDetail) 
  return (
    <div className='flex items-center justify-center w-full'>
      <DatePicker />
        <div >
    <div className=' flex justify-between py-2 px-3  bg-slate-200 m-2 rounded-md' >
        {/* <h5 className='font-bold text-2xl'>{` ${voucherData.class.toUpperCase()} ( ${voucherData.section.toUpperCase()} ) `}</h5> */}
      <button onClick={handlePrint}  className='bg-blue-500 rounded-md px-3 py-2 text-white'>Print this out!</button>
    </div>
    <Suspense fallback={()=>(<>Loading......</>)}>
        {/* <Invoice ref={componentRef} /> */}
    </Suspense>
    </div>
    </div>
  )
}

export default Fv