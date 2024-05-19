"use client";
import React, { useMemo } from "react";
import { useEffect, useState, useContext } from "react";

import { Button } from "@/components/ui/button";
// import axios from "axios"
// import { domainContext } from "@/app/contexts/dataproviders"
import { useSession } from 'next-auth/react';
import Spinner from "@/components/ui/loading"
import CustomAlert from '@/components/ui/customalert';


import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";

const LabelInput = (props) => {

  return (
    <div className="flex flex-col items-center justify-center w-1/6 gap-1  text-pretty font-normal p-1 shadow-slate-500  ">
      <div className="flex items-start  justify-start rounded-md font-semibold  p-1 w-full sm:text-normal text-sm ">
        {props.label}
      </div>
      <input
        type={props.type}
        min={props.min}
        max={props.max}
        placeholder={props.placeholder}
        className=" border border-slate-300 pl-4 rounded-md w-full text-slate-900 bg-slate-100 text-lg"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        
      />
    </div>
  );
};

const Bookingform = (props) => {
  // const ds = useContext(domainContext).base_url
  const [loading,setLoading]= useState(false)
  const {data} = useSession()

  const [showAlert, setShowAlert] = useState(false);
  const [alertprops,setAlertProps]= useState({message:"",head:"",color:"",btntext:""})

  const showMessage = () => {
    setShowAlert(true);
  };

  const closeMessage = () => {
    setShowAlert(false);
  };

  
  const today = new Date().toISOString().split("T")[0];

  const defaults = useMemo(
    () => ({
      adult: 0,
      child: 0,
      infant: 0,
      remarks: "",
    }),
    []
  );

  const passenger = useMemo(
    () => ({
      givenName: "",
      surName: "",
      title: "",
      passport: "",
      dob: today,
      expiry: today,
    }),
    []
  );

  const addPassengers = () => {
    const data = Array.from({ length: total }, () => passenger);
    setPassengers(data);
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [field]: value,
    };
    setPassengers(updatedPassengers);
  };

  const [formData, setformData] = useState(defaults);
  const [passengers, setPassengers] = useState([]);

 

  const total =
    parseInt(formData.adult) + parseInt(formData.child) + parseInt(formData.infant);


  //==========================================data

 
  const ticketId = JSON.parse(props.searchParams.currentTicket);
// const id = ticketId.id

const getTicketInfo =async()=>{
   
  const response = await axios.get(`/api/tickets/ticketInfo/${ticketId}`)
  setTicket(response.data[0])


}
const [ticket,setTicket] = useState()
const [maxGroupId,setmaxGroupId]= useState()

//------reset 

//----------------reset
const reset = async()=>{ 
  const response = await axios.get('/api/general/maxid')
  const id = response.data.lastgroup
  setmaxGroupId(id?parseInt(id)+1:1)

}
 //--------------------------------------transfer details
 useEffect(() => {
  reset()
  getTicketInfo()
  if (total == parseInt(ticket?.currentseats)) {
    // alert("Max. Avaible Tickets are ",ticket?.currentseats);

    setShowAlert(true)
    setAlertProps(
      { 
        message:`Max  Avaiable Tickets are ${ticket?.currentseats}`,
        color:"text-red-600",
        head:"Alert",
        btntext:"OK"
  })
   
  }
}, [total]);
   //====================save ticket
   const saveBooking = async () => {
    setLoading(true)
    if (ticket.id && ticket.currentseats && passengers.length > 0) {
      const savePromises = passengers.map(async (item, index) => {
        const bookingData = {
          date: today,
          userId:data.user.id,
          ticketId:ticket.id,
          name: item.givenName,
          surName: item.surName,
          title: item.title,
          dob: item.dob,
          passport: item.passport,
          expiry: item.expiry,
          groupId:maxGroupId
        };
  
        // console.log("Booking Data:", bookingData);
  
        // Return a promise for each save operation
        return axios.post(`/api/booking/saveBooking`, bookingData)
          .then((response) => {
            if (response.status == 200) {
              return `Booking saved successfully for passenger ${index + 1}`;
            } else {
              throw new Error(`Failed to save booking for passenger ${index + 1}`);
            }
          })
          .catch((error) => {
            console.error("Error saving booking:", error);
            throw new Error(`An error occurred while saving booking for passenger ${index + 1}`);
          });
      });
  
      // Wait for all save promises to resolve
      Promise.all(savePromises)
        .then(async (results) => {
          // All saves completed successfully

          await axios
          .patch(
            `/api/tickets/ticketStatus/${ticketId}`,
  
            {currentSeats:parseInt(ticket.currentseats)-parseInt(total)}
          )

          setShowAlert(true)
          setAlertProps(
            { 
              message:"All bookings saved successfully.",
              color:"text-green-600",
              head:"Success",
              btntext:"OK"
        })
                 
        setPassengers([]) // Reset form or do any other necessary actions
        setformData(defaults)
        setLoading(false)

          
        })
        .catch((error) => {
          // At least one save operation failed
          alert(error.message);
        });
    } else {
      // Alert if any required fields are missing
      alert("Please fill in all required fields before saving.");
    }
  };
  
  return (
    
    <div
      className={`bg-transparent w-screen flex items-center flex-col border-0 shadow-none `}
    >
      {ticket && 
    
    
      <div className=" h-fit py-5  flex flex-col  items-center justify-center w-full">
      <div className="bg-slate-300 w-11/12 py-2 font-bold font-mono text-xl   text-center">
        {" "}
        Ticket Detail
      </div>
        <table className="w-11/12">
        
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
                {ticket?.sector}
              </td>
              <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                {ticket?.airline}
              </td>
              <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                {parseInt(ticket?.bag)}
              </td>
              <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
               {ticket?.meal}
              </td>
              <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                {ticket?.sale}
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
              {ticket?.depflydate.split("T")[0]}
              </td>
              <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
              {ticket?.flightno}
              </td>
              <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
                {ticket?.sector.split("-")[0]}
              </td>
              <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
              {ticket?.sector.split("-")[1]}
              </td>
              <td className=" py-1 bg-slate-200 w-1/5 border border-slate-600 text-center">
               {ticket?.depflytime.slice(0,5)  +"-"+ ticket?.deplandtime.slice(0,5)  }
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" text-start w-11/12 font-bold italic capitalize py-1">
       Total Avaibale Tickets: {parseInt(ticket?.currentseats)}
        </div>
      </div>
      }

      <div className="bg-blue-400 w-11/12 py-6 font-bold font-mono text-xl rounded-md  text-center">
        {" "}
        Enter Booking Detail
      </div>

      <div className="w-11/12 bg-slate-100 min-h-screen">
        <div className="flex gap-2 p-5">
          <LabelInput
            type="number"
            min={0}
            max={parseInt(ticket?.currentseats) - parseInt(formData.child) - parseInt(formData.infant)}
            // max={total}
            label="Adult"
            value={formData.adult}
            setValue={(value) => setformData({ ...formData, adult: value })}
            />

          <LabelInput
            type="number"
            min={0}
            max={parseInt(ticket?.currentseats) - parseInt(formData.adult) - parseInt(formData.infant)}
            label="Child"
            value={formData.child}
            setValue={(value) => setformData({ ...formData, child: value })}
            />

          <LabelInput
            type="number"
            min={0}
            max={parseInt(ticket?.currentseats) - parseInt(formData.adult) - parseInt(formData.child)}
            label="Infant"
            value={formData.infant}
            setValue={(value) => setformData({ ...formData, infant: value })}
            />

          <div className="flex flex-col items-center justify-center w-3/6 gap-1  text-pretty font-normal p-1 shadow-slate-500  ">
            <div className="flex items-start  justify-start rounded-md font-semibold  p-1 w-full sm:text-normal text-sm ">
              Remarks{" "}
              <span className="flex pl-2  pt-1 text-xs font-normal text-slate-700">
                ( Any Special Instruction )
              </span>
            </div>
            <input
              type="text"
              className="p-1 border border-slate-300 pl-4 rounded-md w-full text-slate-900 bg-slate-100"
              value={formData.remarks}
              onChange={(e) => setformData({ ...formData, remarks: e.target.value })}
              />
          </div>
        </div>
        <div className="flex items-center p-4 justify-end w-full">
          <button
            onClick={() => addPassengers()}
            className="bg-blue-400  p-2  w-1/6 right-0 rounded-md font-mono"
            >
            Add Details
          </button>
        </div>
        {/* ---------------------tickets--------------------------------------*/}
        {passengers.map((item, index) => (
          <div className="w-full my-5 p-2 " key={index}>
            <span className="bg-yellow-200 p-1 mb-2">
              Passenger # {index + 1}
            </span>
            <div className="w-full py-5 border border-slate-300 bg-slate-200  rounded-lg flex ">
              <LabelInput
                type="text"
                label="Given Name"
                placeholder={"Passenger Name"}
                value={item.givenName}
                setValue={(value) =>
                  handlePassengerChange(index, "givenName", value)
                }
                />

              <LabelInput
                type="text"
                label="Sur Name"
                placeholder={"Sur Name"}
                value={item.surName}
                setValue={(value) =>
                  handlePassengerChange(index, "surName", value)
                }
                />

              <LabelInput
                type="text"
                label="Title"
                placeholder={"Mr, Mrs, Chd,Inf"}
                value={item.title}
                setValue={(value) =>
                  handlePassengerChange(index, "title", value)
                }
                />

              <LabelInput
                type="text"
                label="Passport No"
                placeholder={"XYz1212"}
                value={item.passport}
                setValue={(value) =>
                  handlePassengerChange(index, "passport", value)
                }
                />

              <LabelInput
                type="date"
                label="Date of Birth"
                value={item.dob}
                setValue={(value) => handlePassengerChange(index, "dob", value)}
                />

              <LabelInput
                type="date"
                label="Passport Expiry"
                placeholder={"Mr, Mrs, Chd,Inf"}
                value={item.expiry}
                setValue={(value) =>
                  handlePassengerChange(index, "expiry", value)
                }
                />
            </div>
          </div>
        ))}
        <div className="flex w-full justify-end px-3 items-end">
          {loading && 
        <Spinner width={10} height={10}/>
          }
          <button
            className="bg-blue-400 p-2 rounded-lg font-bold font-mono"
            onClick={() => saveBooking
              ()}
              >
            Confirm Booking 
          </button>

        </div>
      </div>
      {showAlert && (
        <CustomAlert
          // message={`Max  Avaiable Tickets are ${ticket?.currentseats}`}
          onClose={closeMessage}
          message={alertprops.message}
          head={alertprops.head}
          color={alertprops.color}
          btn= {alertprops.btntext}
        />
      )}
    </div>
  );
};

export default Bookingform;

//  -------agency info
//               <div className='flex gap-2 p-5'>
//             <LabelInput type='text'label ='Agency' value = {data.agency} setValue={(value)=>setData({...data,agency:value})}/>

//             <LabelInput type='text'label ='Agent' value = {data.agent} setValue={(value)=>setData({...data,agent:value})}/>

//             <LabelInput type='text'label ='Email' value = {data.email} setValue={(value)=>setData({...data,email:value})}/>

//             <LabelInput type='text'label ='Phone' value = {data.phone} setValue={(value)=>setData({...data,phone:value})}/>
//             </div>
