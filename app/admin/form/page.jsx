"use client";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { ImBin2 } from "react-icons/im";
import { VscClearAll } from "react-icons/vsc";
import { IoMdSave, IoIosPeople } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import axios from "axios";
import { getmaxid } from "@/function_lib/genral";
import { useSession } from "next-auth/react";
import { Selector } from "@/components/ui/selector";
import ImgPicker from "@/components/ui/imagepicker";

const LabelInput = (props) => {
  return (
    <div className="flex flex-row items-center justify-center w-full  sm:w-2/5 gap-2  bg-slate-100 rounded-md shadow-md p-1 shadow-slate-500 border border-slate-400">
      <div className="flex items-center justify-center rounded-md font-bold bg-slate-400 sm:w-56 w-28 sm:text-normal text-sm p-1">
        {props.label}
      </div>
      <input
        type={props.type}
        className="p-1 pl-4 rounded-md w-full text-slate-900 bg-slate-100"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
};

const Form = () => {
  const { data } = useSession();
  const ref = useRef(null);


const groupsData = [
  
  {
    value: "KSA",
    label: "KSA",
  },
  {
    value: "UAE",
    label: "UAE",
  },
  {
    value: "UMRAH",
    label: "UMRAH",
  },
  
  
];

 
  const today = new Date().toISOString().split("T")[0];
  const defaults = useMemo(
    () => ({
      srNo: "",
      date: today,
      airline: "",
      logo: "",
      sector: "",
      group:"",
      pnr: "",
      flightNo: "",
      depFlyDate: today,
      depFlyTime: "12:00",
      depLandDate: today,
      depLandTime: "12:00",

      returnSector:"",
      returnFlightNo:"",

      ariveFlyTime: "12:00",
      ariveFlyDate: today,
      ariveLandDate: today,
      ariveLandTime: "12:00",
      bag: "",
      handBag: "",
      meal: "",
      purchase: "",
      sale: "",
      seats: "",
      givenName: "",
      sendName: "",
      showSave: "block",
      showUpdate: "hidden",
    }),
    []
  );
  const [Ticket, setTicket] = useState(defaults);

  const getAirline = async () => {
    const airlinesData = await axios.get("/api/tickets/getairline");
    const airlines = airlinesData.data.map((item) => ({
      value: item.airline,
      label: item.airline,
    }));
    setEntryTypes(airlines);
  };

  const getGroups = async () => {
    const groupData = await axios.get("/api/tickets/getGroup");
    const group = groupData.data.map((item) => ({
      value: item.tgroup,
      label: item.tgroup,
    }));
    setGroups(group);
  };




  //----------------reset
  const reset = async () => {
    const response = await axios.get('/api/general/maxid')
    const id = response.data.lastticket
    
    setTicket({ ...defaults, srNo:parseInt(id)+1})
    // await getGroups()
    await getAirline();
  };

  //----------------use effect
  useEffect(() => {
    reset();
  }, []);

  const [entryTypes, setEntryTypes] = useState([]);
  const [typeOpen, setTypeOpen] = useState(false);

  const [groups, setGroups] = useState(groupsData);
  const [groupOpen, setGroupOpen] = useState(false);

  //====================save ticket
  const saveTickets = async () => {
    if (
      Ticket.pnr &&
      Ticket.airline &&
      Ticket.sale &&
      Ticket.purchase &&
      Ticket.flightNo &&
      Ticket.seats
    ) {
      const ticketData = {
        date: Ticket.date,
        airline: Ticket.airline,
        logo: Ticket.logo,
        group :Ticket.group,
        sector: Ticket.sector,
        pnr: Ticket.pnr,
        flightNo: Ticket.flightNo,
        depFlyDate: Ticket.depFlyDate,
        depFlyTime: Ticket.depFlyTime,
        depLandDate: Ticket.depLandDate,
        depLandTime: Ticket.depLandTime,

        returnSector: Ticket.returnSector,
        returnFlightNo: Ticket.returnFlightNo,

        arvFlyDate: Ticket.ariveFlyDate,
        arvFlytime: Ticket.ariveFlyTime,
        arvLandDate: Ticket.ariveLandDate,
        arvLandTime: Ticket.ariveLandTime,
        bag: Ticket.bag,
        handbag: Ticket.handBag,
        meal: Ticket.meal,
        purchase: Ticket.purchase,
        sale: Ticket.sale,
        givenName: Ticket.givenName,
        sendName: Ticket.sendName,
        adminId: data?.user.id,
        totalSeats: Ticket.seats,
        currentSeats: Ticket.seats,
      };

      console.log("ticket>>>>>>>>>>>>>>", ticketData);
      axios
        .post(
          `/api/tickets/saveTickets`,

          ticketData
        )
        .then((response) => {
          if (response.statusText == "OK") {
            alert("Saved Successfully");

            reset();
          } else {
            alert("Not Saved");
          }
        });
    } else {
      alert("Note: Please Fill All Fields");
    }
  };
  //====================update ticket
  const updateTickets = async (id) => {
    if (
      Ticket.pnr &&
      Ticket.airline &&
      Ticket.sale &&
      Ticket.purchase &&
      Ticket.flightNo &&
      Ticket.seats
    ) {
      const ticketData = {
        date: Ticket.date,
        airline: Ticket.airline,
        group :Ticket.group,
        logo: Ticket.logo,
        sector: Ticket.sector,
        pnr: Ticket.pnr,
        flightNo: Ticket.flightNo,
        depFlyDate: Ticket.depFlyDate,
        depFlyTime: Ticket.depFlyTime,
        depLandDate: Ticket.depLandDate,
        depLandTime: Ticket.depLandTime,

        returnSector: Ticket.returnSector,
        returnFlightNo: Ticket.returnFlightNo,

        arvFlyDate: Ticket.ariveFlyDate,
        arvFlytime: Ticket.ariveFlyTime,
        arvLandDate: Ticket.ariveLandDate,
        arvLandTime: Ticket.ariveLandTime,
        bag: Ticket.bag,
        handbag: Ticket.handBag,
        meal: Ticket.meal,
        purchase: parseInt(Ticket.purchase),
        sale: parseInt(Ticket.sale),
        givenName: Ticket.givenName,
        sendName: Ticket.sendName,
        adminId: parseInt(data?.user.id),
        totalSeats: parseInt(Ticket.seats),
        
      };

      axios
        .patch(
          `/api/tickets/updateTicket/${id}`,

          ticketData
        )
        .then((response) => {
          if (response.statusText == "OK") {
            alert("Updated Successfully");

            reset();
          } else {
            alert("Not Updated");
          }
        });
    } else {
      alert("Note: Please Fill All Fields");
    }
  };

  //===============================retriving
  const retriveData = async (id) => {
    try {
      const response = await axios.get(`/api/tickets/ticketbyid/${id}`);
      if (response) {
        const entry = response.data[0];
        console.log(entry)
        setTicket({
          ...Ticket,
          date: entry.date.split("T")[0],
          airline: entry.airline,
          sector: entry.sector,
          logo: entry.logo,
          group:entry.tgroup,
          pnr: entry.pnr,
          flightNo: entry.flightNo,

          depFlyDate: entry.depFlyDate.split("T")[0],
          depFlyTime: entry.depFlyTime.split("T")[1].substr(0, 5),
          depLandDate: entry.depLandDate.split("T")[0],
          depLandTime: entry.depLandTime.split("T")[1].substr(0, 5),

          returnSector: entry.returnSector,
          returnFlightNo: entry.returnFlightNo,

          ariveFlyDate: entry.arvFlyDate.split("T")[0],
          ariveFlyTime: entry.arvFlytime.split("T")[1].substr(0, 5),
          ariveLandDate: entry.arvLandDate.split("T")[0],
          ariveLandTime: entry.arvLandTime.split("T")[1].substr(0, 5),
          bag: entry.bag,
          handBag: entry.handbag,
          meal: entry.meal,
          purchase: entry.purchase,
          sale: entry.sale,
          givenName: entry.givenName,
          sendName: entry.sendName,
          seats: entry.totalSeats,
          showSave: "hidden",
          showUpdate: "block",
        });
      } else {
        alert("No Data Found");
      }
    } catch {
      alert("Data not found");
    }
  };

  const handleaddButton = () => {
    ref.current.focus();
    setTypeOpen(!typeOpen);
  };

  const handleaddButtonGroup = () => {
    ref.current.focus();
    setGroupOpen(!groupOpen);
  };

  return (
    <div className=" bg-gradient-to-br from-blue-200 pb-10  bg-green-100 flex flex-col items-center  ">
      <div className=" bg-gradient-to-bl text-3xl sm:text-5xl font-extrabold  to-purple-600 from-blue-800 bg-clip-text text-center p-10 text-transparent ">
        Avaible Tickets
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-center w-5/6 border border-white rounded-2xl shadow-lg shadow-slate-700 bg-white bg-opacity-75 gap-5 p-10  flex-wrap">
        {/* <div className='flex flex-row items-center  w-full   sm:pl-20  md:pl-28'> */}
        <div className="flex flex-row items-center justify-center w-full  sm:w-2/5 gap-2  bg-slate-100 rounded-md shadow-md p-1 shadow-slate-500 border border-slate-400">
          <div className="flex items-center justify-center rounded-md font-bold bg-slate-400 sm:w-56 w-28 sm:text-normal text-sm p-1">
            S.No
          </div>
          <input
            type="text"
            className="p-1 pl-4 rounded-md w-full text-slate-900 bg-slate-100"
            value={Ticket.srNo}
            onChange={(e) => setTicket({ ...Ticket, srNo: e.target.value })}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                retriveData(Ticket.srNo);
              }
            }}
          />
        </div>
        {/* </div> */}
        <div className="flex flex-row items-center justify-center w-full  sm:w-2/5 gap-2   rounded-md "></div>

        {/* <LabelInput
          type="date"
          label="Date"
          value={Ticket.date}
          setValue={(value) => setTicket({ ...Ticket, date: value })}
        /> */}

        {/* -------------Group */}
        <div className="flex flex-row items-center justify-center w-full  sm:w-2/5 gap-2  bg-slate-100 rounded-md shadow-md p-1 shadow-slate-500 border border-slate-400">
          <div className="flex items-center justify-center rounded-md font-bold bg-slate-400 sm:w-48 w-28 sm:text-normal text-sm p-1">
            Group
          </div>
          <div className="w-full flex ">
            <div
              className={`border w-full  flex rounded-sm border-second items-center justify-center pr-2 `}
            >
              <div
                className={`w-full ${groupOpen == false ? "block" : "hidden"}`}
              >
                {groups && (
                  <Selector
                    data={groups}
                    value={Ticket.group}
                    setValue={(x) => setTicket({ ...Ticket, group: x })}
                  />
                )}
              </div>

              {/* entrytype input */}
              <input
                ref={ref}
                type="text"
                id="name"
                className={`border w-full p-1 rounded-sm focus:outline-none pl-2  ${
                  groupOpen == false ? "hidden" : "block"
                }`}
                value={Ticket.group}
                onChange={(e) =>
                  setTicket({ ...Ticket, group: e.target.value })
                }
              />

              <button
                className="bg-slate-500 rounded-md flex items-center ml-2 text-slate-100 px-2 py-1"
                onClick={() => handleaddButtonGroup()}
              >
                Add
              </button>
            </div>
          </div>
        </div>

<LabelInput
          type="text"
          label="PNR"
          value={Ticket.pnr}
          setValue={(value) => setTicket({ ...Ticket, pnr: value })}
        />
        {/* air line  */}
        <div className="flex flex-row items-center justify-center w-full  sm:w-2/5 gap-2  bg-slate-100 rounded-md shadow-md p-1 shadow-slate-500 border border-slate-400">
          <div className="flex items-center justify-center rounded-md font-bold bg-slate-400 sm:w-48 w-28 sm:text-normal text-sm p-1">
            Airline
          </div>
          <div className="w-full flex ">
            <div
              className={`border w-full  flex rounded-sm border-second items-center justify-center pr-2 `}
            >
              <div
                className={`w-full ${typeOpen == false ? "block" : "hidden"}`}
              >
                {entryTypes && (
                  <Selector
                    data={entryTypes}
                    value={Ticket.airline}
                    setValue={(x) => setTicket({ ...Ticket, airline: x })}
                  />
                )}
              </div>

              {/* entrytype input */}
              <input
                ref={ref}
                type="text"
                id="name"
                className={`border w-full p-1 rounded-sm focus:outline-none pl-2  ${
                  typeOpen == false ? "hidden" : "block"
                }`}
                value={Ticket.airline}
                onChange={(e) =>
                  setTicket({ ...Ticket, airline: e.target.value })
                }
              />

              <button
                className="bg-slate-500 rounded-md flex items-center ml-2 text-slate-100 px-2 py-1"
                onClick={() => handleaddButton()}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full  sm:w-2/5 gap-2  bg-slate-100 rounded-md shadow-md pl-1 shadow-slate-500 border border-slate-400">
          <div className="flex items-center justify-center rounded-md font-bold bg-slate-400 sm:w-56 w-28 sm:text-normal text-sm p-1">
            Logo
          </div>
          <ImgPicker
            setter={(value) => setTicket({ ...Ticket, logo: value })}
          />
          <div
            className="h-10 w-20 bg-cover  bg-center rounded-e-md bg-slate-300"
            style={{ backgroundImage: `url(${Ticket.logo})` }}
          ></div>
        </div>

         
        <div className="w-full bg-white p-2 font-bold text-lg text-center">
          One Sided
        </div>
        <LabelInput
          type="text"
          label="Sector"
          value={Ticket.sector}
          setValue={(value) => setTicket({ ...Ticket, sector: value })}
        />
        <LabelInput
          type="text"
          label="Flight No"
          value={Ticket.flightNo}
          setValue={(value) => setTicket({ ...Ticket, flightNo: value })}
        />

        <LabelInput
          type="date"
          label="Dep.Fly Date "
          value={Ticket.depFlyDate}
          setValue={(value) => setTicket({ ...Ticket, depFlyDate: value })}
        />

        <LabelInput
          type="time"
          label="Dep fly Time"
          value={Ticket.depFlyTime}
          setValue={(value) => setTicket({ ...Ticket, depFlyTime: value })}
        />

        <LabelInput
          type="date"
          label="Dep.Land Date "
          value={Ticket.depLandDate}
          setValue={(value) => setTicket({ ...Ticket, depLandDate: value })}
        />

        <LabelInput
          type="time"
          label="Dep.Land Time "
          value={Ticket.depLandTime}
          setValue={(value) => setTicket({ ...Ticket, depLandTime: value })}
        />

        <div className="w-full bg-white p-2 font-bold text-lg text-center">
          Retrun Detail
        </div>

        <LabelInput
          type="text"
          label="Return Sector"
          value={Ticket.returnSector}
          setValue={(value) => setTicket({ ...Ticket, returnSector: value })}
        />

        <LabelInput
          type="text"
          label=" ReturnFlight No"
          value={Ticket.returnFlightNo}
          setValue={(value) => setTicket({ ...Ticket, returnFlightNo: value })}
        />

        <LabelInput
          type="date"
          label="Ariv.Fly Date "
          value={Ticket.ariveFlyDate}
          setValue={(value) => setTicket({ ...Ticket, ariveFlyDate: value })}
        />

        <LabelInput
          type="time"
          label="Ariv.Time"
          value={Ticket.ariveFlyTime}
          setValue={(value) => setTicket({ ...Ticket, ariveFlyTime: value })}
        />

        <LabelInput
          type="date"
          label="Ariv.Land Date "
          value={Ticket.ariveLandDate}
          setValue={(value) => setTicket({ ...Ticket, ariveLandDate: value })}
        />

        <LabelInput
          type="time"
          label="Ariv.Land Time "
          value={Ticket.ariveLandTime}
          setValue={(value) => setTicket({ ...Ticket, ariveLandTime: value })}
        />
<div className="w-full bg-white p-2 font-bold text-lg text-center">
          Other Details
        </div>
        <LabelInput
          type="text"
          label="Bag"
          value={Ticket.bag}
          setValue={(value) => setTicket({ ...Ticket, bag: value })}
        />
        <LabelInput
          type="text"
          label="HandCarry"
          value={Ticket.handBag}
          setValue={(value) => setTicket({ ...Ticket, handBag: value })}
        />
        <LabelInput
          type="text"
          label="Meal"
          value={Ticket.meal}
          setValue={(value) => setTicket({ ...Ticket, meal: value })}
        />
        <LabelInput
          type="text"
          label="Purchase"
          value={Ticket.purchase}
          setValue={(value) => setTicket({ ...Ticket, purchase: value })}
        />

        <LabelInput
          type="text"
          label="Sale"
          value={Ticket.sale}
          setValue={(value) => setTicket({ ...Ticket, sale: value })}
        />

        <LabelInput
          type="text"
          label="Seats"
          value={Ticket.seats}
          setValue={(value) => setTicket({ ...Ticket, seats: value })}
        />

        <LabelInput
          type="text"
          label="GivenName"
          value={Ticket.sendName}
          setValue={(value) => setTicket({ ...Ticket, sendName: value })}
        />

        <LabelInput
          type="text"
          label="SendName"
          value={Ticket.givenName}
          setValue={(value) => setTicket({ ...Ticket, givenName: value })}
        />

        <div>
          <div className=" h-2/5 pt-10 flex w-full items-center justify-center flex-wrap  gap-2 ">
           

            <button
              className={` pl-8 pr-10 py-2 rounded-md bg-[#4c5065] text-white w-36 `}
              type="button"
              onClick={() => reset()}
            >
              <div className="flex items-center">
                <VscClearAll className="size-5 mr-1" /> Reset
              </div>
            </button>

            {/* update button */}
            <button
              className={` pl-6 pr-5 py-2 rounded-md text-white w-36 bg-green-500 ${Ticket.showUpdate}`}
              type="button"
              onClick={() => updateTickets(Ticket.srNo)}
            >
              <div className="flex items-center">
                <MdEditNote className="size-5 mr-1 " /> Save
              </div>
            </button>
            <button
              className={` ${Ticket.showSave} pl-8 pr-10 py-2 rounded-md text-white bg-[#6f44a2] w-36`}
              type="submit"
              onClick={() => saveTickets()}
            >
              <div className="flex items-center">
                <IoMdSave className="size-5 mr-1 " /> Save
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
