import React, { useMemo } from "react";
import { useEffect, useState, useContext } from "react";
import { BiDetail } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import axios from "axios"
// import { domainContext } from "@/app/contexts/dataproviders"
// import { useSession } from 'next-auth/react';
import { IoCheckmarkSharp } from "react-icons/io5";
import { Selector } from "@/components/ui/selector";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VscEye } from "react-icons/vsc";
// import { columns } from './ticketInfo_colums'

const Options = [
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "Clear",
    value: "Clear",
  },
  {
    label: "Installment",
    value: "Installment",
  },
];

const Details = (props) => {
  // const ds = useContext(domainContext).base_url
  // const {data} = useSession()
  const today = new Date().toISOString().split("T")[0];

  const defaults = useMemo(
    () => ({
      discount: "",
      total: "",
      recieving: "",
    }),
    []
  );

  const [formData, setFormData] = useState(defaults);

  {
    const ticket = props.ticket;

    const [transferMenuState, settransferMenuState] = useState(true);

    const reset =async()=>{
      setFormData(defaults)
    settransferMenuState(true)

    }
    //==========================================save booking

    const saveBooking = async (id) => {
      if (formData.recieving) {
        const booking = {
          price:
            formData.discount == ""
              ? ticket.sale
              : parseInt(ticket.sale) - parseInt(formData.discount),
          discount: formData.discount,
          payment: formData.recieving,
          status:"Confirmed",
          date: today,
        };

        axios
          .patch(
            `/api/booking/bookingState/${id}`,

            booking
          )
          .then((response) => {
            if (response.status == 200) {
              alert("Booking Confirmed");

              reset();
              settransferMenuState(false)
              // settransferMenuState(!transferMenuState)
            } else {
              alert("Booking not Confirmed ");
            }
          });
      } else {
        alert("Note: Please Fill All Fields");
      }
    };

 
    //-------------------------------------- 

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <button  
            className=" w-2/6 text-green-700 hover:bg-green-700 flex gap-1 border-2 border-green-700 hover:text-white  font-semibold rounded-md p-2  shadow shadow-slate-300"><IoCheckmarkSharp size={20}/> Confirm </button>
        </DropdownMenuTrigger>
        {transferMenuState &&
        <DropdownMenuContent
          align="end"
          className={`w-screen  bg-opacity-60 flex items-center  flex-col border-0   justify-start shadow-none `}
        >
          <div className="w-11/12 flex items-center justify-center pt-12  pb-6 px-6 flex-col bg-slate-900 bg-blur rounded-md  border-2 border-slate-500  ">
            <DropdownMenuLabel className="bg-blue-400 w-full  text-center">
              <div className="font-semibold text-xl font-mono w-full">
                Ticket Detail
              </div>
            </DropdownMenuLabel>

            <div className=" w-full bg-slate-100 justify-center flex items-center ">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      Sector
                    </th>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      AirLine
                    </th>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      Bagage
                    </th>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      Meal
                    </th>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      Fare
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                      {ticket.sector}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                      {ticket.airline}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                      {parseInt(ticket.bag)}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                      {ticket.meal}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                    PKR  {ticket.sale} /-
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      Flight Date
                    </th>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      Flight No.
                    </th>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      Origin
                    </th>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      Destination
                    </th>
                    <th className="bg-slate-300 w-1/5 border border-slate-600 text-center">
                      Timings
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                      {ticket.depflydate.split("T")[0]}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                      {ticket.flightno}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                      {ticket.sector.split("-")[0]}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                      {ticket.sector.split("-")[1]}
                    </td>
                    <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                      {ticket.depflytime.slice(0, 5) +
                        "-" +
                        ticket.deplandtime.slice(0, 5)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="  w-full bg-slate-100 items-end flex flex-col gap-3   text-center">
              <div className=" p-3 w-2/6 bg-slate-200  flex flex-col gap-3   text-center">
                <div className="flex gap-6">
                  <label htmlFor="" className="w-1/4 font-bold ">
                    Discount
                  </label>
                  <input
                    value={formData.discount}
                    onChange={(e) =>
                      setFormData({ ...formData, discount: e.target.value })
                    }
                    type="number"
                    min={0}
                    className="bg-slate-100 border w-full border-blue-900"
                  />
                </div>
                <div className="flex gap-6">
                  <label htmlFor="" className="w-1/4 font-bold ">
                    Net.Amnt
                  </label>
                  <input
                    value={
                      formData.discount == ""
                        ?  "PKR" +" "+  ticket.sale + "/-"
                        :"PKR" +" "+ 
                        ( parseInt(ticket.sale) - parseInt(formData.discount))  + "/-"
                    }
                   readOnly
                    type="text"
                    className="bg-slate-100 border font-bold w-full border-blue-900  pl-2"
                  />
                </div>
                <div className="flex gap-6">
                  <label htmlFor="" className="w-1/4 font-bold ">
                    Recieving
                  </label>
                  <div className="bg-slate-100 border border-blue-900 w-full pl-2">
                    <Selector
                      data={Options}
                      value={formData.recieving}
                      setValue={(value) =>
                      setFormData({ ...formData, recieving: value })
                      }
                    />
                  </div>
                </div>
                <div className=" items-end  justify-end flex w-full px-3">
               
                  <button
                  onClick={()=>saveBooking(ticket.id)}
                  className="bg-blue-900  hover:bg-green-700 rounded-md p-2 block text-white w-2/4">
                    Save
                  </button>
                 
                 
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
        }
      </DropdownMenu>
    );
  }
};

export default Details;
