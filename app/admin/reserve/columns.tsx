import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { BsFillLuggageFill } from "react-icons/bs";
import { TbDeviceWatchDown, TbDeviceWatchUp } from "react-icons/tb";
import { MdWatchLater } from "react-icons/md";
import Link from "next/link";

import { RxCross1 } from "react-icons/rx";
import Details from "./ticketDetail";
import axios from "axios";
export type rptCol = {
  pnr: string;
  title: string;
  name: string;
  surName: string;
  passport: string;
  dob: string;
  expiry: string;
  id: string;
  ticketId:string
  currentSeats:string
};

const today = new Date().toISOString().split("T")[0];
const cancelBooking = async (id: string,ticket:string,balance:number) => {
  const booking = {
    status: "Cancel",
    date: today,
    ticketId:ticket,
    seats:balance
  };

  axios
    .patch(
      `/api/booking/cancelBooking/${id}`,

      booking
    )
    .then((response) => {
      if (response.statusText == "OK") {
        alert("Booking Concelled");

        
      } else {
        alert("Error in Cancelleation ");
      }
    });
};

export const columns: ColumnDef<rptCol>[] = [
  {
    header: "PNR",
    accessorKey: "pnr",
  },
  {
    header: "Passenger",
    accessorKey: "name",
  },

  {
    header: "Date of Birth",
    cell: ({ row }) => {
      return (
        <div>
          <div className="flex items-center justify-center gap-2 mb-2">
            {row.original.dob.split("T")[0].split("-").reverse().join("-")}
          </div>
        </div>
      );
    },
  },
  {
    header: "Passort",
    accessorKey: "passport",
  },
  {
    header: "Passport exp",
    cell: ({ row }) => {
      return (
        <div>
          <div className="flex items-center justify-center gap-2 mb-2">
            {row.original.expiry.split("T")[0].split("-").reverse().join("-")}
          </div>
        </div>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const currentTicket = row.original;
      const ticketBalance = parseInt(row.original.currentSeats) - 1
      return (
        <div className=" flex gap-3 item-center justify-center">
          <Details ticket={currentTicket} />
          {/* <Conformation /> */}
          <button
            className=" w-1/4 text-yellow-700 hover:bg-yellow-500 flex gap-1 border-2 border-yellow-500 hover:text-white  font-semibold rounded-md p-2  shadow shadow-slate-300"
            onClick={() => cancelBooking(row.original.id,row.original.ticketId,ticketBalance)}
          >
            <RxCross1 size={20} /> Cancel{" "}
          </button>
        </div>
      );
    },
  },
];
