"use client";
import React ,{useState,useEffect}from "react";
import Grouppicker from "@/components/ui/grouppicker";
import { Table } from "@/components/ui/table";
import { columns } from "./columns";
import { DataTablewithFilters } from "@/components/ui/filtertable";
import axios from "axios";

const Groups = () => {
  const data = [
    {
      depDate: "2024-12-12",
      name: "Mu Arshad",
      arrivalDate: "2024-12-16",
      depTime: "13:12-14:33",
      depOrigin: "JDH-PAK",
      depFlight: "123EF",
      arrivalOrigin: "PAK-JDH",
      arrivalFlight: "123EF",
      arrivalTime: "23:69-20:53",
      bag: "30",
      handCarry: "5",
      meal: "YES",
      fare: "23400",
    },
    {
      depDate: "2024-12-12",
      name: "Mu Affan",
      arrivalDate: "2024-12-16",
      depTime: "13:12-14:33",
      depOrigin: "JDH-PAK",
      depFlight: "123EF",
      arrivalOrigin: "PAK-JDH",
      arrivalFlight: "123EF",
      arrivalTime: "23:69-20:53",
      bag: "30",
      handCarry: "5",
      meal: "YES",
      fare: "23400",
    },
    {
      depDate: "2024-12-12",
      name: "Mu Naveed",
      arrivalDate: "2024-12-16",
      depTime: "13:12-14:33",
      depOrigin: "JDH-PAK",
      depFlight: "123EF",
      arrivalOrigin: "PAK-JDH",
      arrivalFlight: "123EF",
      arrivalTime: "23:69-20:53",
      bag: "30",
      handCarry: "5",
      meal: "YES",
      fare: "23400",
    },
    {
      depDate: "2024-12-12",
      arrivalDate: "2024-12-16",
      depTime: "13:12-14:33",
      depOrigin: "JDH-PAK",
      depFlight: "123EF",
      arrivalOrigin: "PAK-JDH",
      arrivalFlight: "123EF",
      arrivalTime: "23:69-20:53",
      bag: "30",
      handCarry: "5",
      meal: "YES",
      fare: "23400",
    },
  ];

  const [ticketData, setTicketData] = useState();

  const getTickets = async () => {
    try {
      const response = await axios.get(`/api/tickets/getTickets`);
      if (response) {
        const data = response.data;
        console.log("data-----",data)
        setTicketData(data);
      } else {
        alert("No data Found");
      }
    } catch {
      alert("No data Found");
    }
  };

  useEffect(()=>{
    getTickets()
  },[])

  return (
    <main className=" bg-gradient-to-br from-blue-200   via-slate-300 bg-blue-200 flex flex-col items-center min-h-screen ">
      <div className="flex flex-row justify-around items-center  bg-slate-100 p-3 w-full">
        <Grouppicker />
        <div className="p-1">
          <button
            className="bg-blue-900 text-white-900 rounded-md font-bold px-2 py-1 text-white border-2 border-blue-900 hover:bg-blue-800 hover:scale-105 transition "
            onClick={() => console.log("sa")}
          >
            Generate Report
          </button>
        </div>
      </div>
      <div className="w-11/12">
        { ticketData &&
        <DataTablewithFilters columns={columns} data={data} />
}
      </div>
    </main>
  );
};

export default Groups;
