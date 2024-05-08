"use client";
import React ,{useState,useEffect}from "react";
import Grouppicker from "@/components/ui/grouppicker";
import { Table } from "@/components/ui/table";
import { columns } from "./columns";
import { DataTablewithFilters } from "@/components/ui/filtertable2";
import axios from "axios";
import { ImSearch } from "react-icons/im";

const Groups = (props) => {
 
 const grp = props.searchParams.group

  const [ticketData, setTicketData] = useState();

  const getTickets = async () => {
    try {
      const response = await axios.get(`/api/tickets/getTickets`);
      if (response) {
        const data = response.data;
        const airlines = Array.from(new Set(data.map((item)=>item.airline)))

        const dataarray = airlines.map((item,index)=>{ 
          
          const result = data.filter((x)=>x.airline===item)
          const logo =result.find((item)=>item.logo !="")
          return (
          { 
          data : result,
          airline: result[0].airline,
          logo:logo?logo.logo:null
        }
      )
    })
    console.log(dataarray)
        setTicketData(dataarray);
      } else {
        alert("No data Found");
      }
    } catch {
      alert("No data Found");
    }
  };

  const getGroupSectorTickets = async () => {
    try {
      const response = await axios.post(`/api/tickets/groupSectorTicket`,
      {   
        group : selectedGroup,      
        sector : selectedSector
        }
    );
      if (response) {
        const data = response.data;
        const airlines = Array.from(new Set(data.map((item)=>item.airline)))

        const dataarray = airlines.map((item,index)=>{ 
          
          const result = data.filter((x)=>x.airline===item)
          const logo =result.find((item)=>item.logo !="")
          return (
          { 
          data : result,
          airline: result[0].airline,
          logo:logo?logo.logo:null
        }
      )
    })
    console.log(dataarray)
        setTicketData(dataarray);
      } else {
        alert("No data Found");
      }
    } catch {
      alert("No data Found");
    }
  };


  const getGroupTickets = async (group) => {
    try {
      const response = await axios.post(`/api/tickets/getGroupTickets`,
      {           
        group : group
        }
    );
      if (response) {
        console.log("---------",response.data)
        const data = response.data;
        const airlines = Array.from(new Set(data.map((item)=>item.airline)))

        const dataarray = airlines.map((item,index)=>{ 
          
          const result = data.filter((x)=>x.airline===item)
          const logo =result.find((item)=>item.logo !="")
          return (
          { 
          data : result,
          airline: result[0].airline,
          logo:logo?logo.logo:null
        }
      )
    })
  console.log("xxx-------",dataarray)
        setTicketData(dataarray);
      } else {
        alert("No data Found");
      }
    } catch {
      alert("No data Found");
    }
  };

  const getSectorTickets = async () => {
    try {
      const response = await axios.post(`/api/tickets/getSectorTickets`,
      {   
             
        sector : selectedSector
        }
    );
      if (response) {
        const data = response.data;
        const airlines = Array.from(new Set(data.map((item)=>item.airline)))

        const dataarray = airlines.map((item,index)=>{ 
          
          const result = data.filter((x)=>x.airline===item)
          const logo =result.find((item)=>item.logo !="")
          return (
          { 
          data : result,
          airline: result[0].airline,
          logo:logo?logo.logo:null
        }
      )
    })
 
        setTicketData(dataarray);
      } else {
        alert("No data Found");
      }
    } catch {
      alert("No data Found");
    }
  };



  const getGroups = async () => {
    const groupData = await axios.get("/api/tickets/getGroup");
    const group = groupData.data.map((item) => ({
      value: item.tgroup,
      label: item.tgroup,
    }));
    setGroups([{value: 'ALL',
      label: 'ALL'},...group]);
  };


  const getSectors = async () => {
    const sectorsData = await axios.get("/api/tickets/getSectors");
    const sector = sectorsData.data.map((item) => ({
      value: item.sector,
      label: item.sector,
    }));
    setSectors([{
      value: 'All',
      label: 'All'},
      ...sector]);
  };

  
    //----------------reset
    const reset = async () => {
     
      await getGroups()
      await getSectors()

      if(grp != 'All'){
        await getGroupTickets(grp)
        setSelectedGroup(grp)
       
      }
      else{
        setSelectedGroup("ALL")
        await getTickets()
      }

      
    };

  useEffect(()=>{
    reset()
  },[])
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [sectors, setSectors] = useState([]);
  const [selectedSector, setSelectedSector] = useState("");

  return (
    <main className=" bg-gradient-to-br from-blue-200   via-slate-300 bg-blue-200 flex flex-col items-center min-h-screen ">
      <div className="flex flex-row justify-around items-center  bg-slate-100 p-3 w-full">
        <Grouppicker
        // date = {date}
        // setDate={setDate}
         groups={groups}
         selectedGroup={selectedGroup}
         setSelectedGroup={setSelectedGroup}
         sectors={sectors}
         selectedSector={selectedSector}
         setSelectedSector={setSelectedSector}
         
         />
        <div className="p-1">
          <button
            className="bg-blue-900 text-white-900 rounded-md font-bold px-2 py-1 text-white border-2 border-blue-900 hover:bg-blue-800 flex items-center gap-3hover:scale-105 transition "
            onClick={() =>
              {
                if(selectedGroup == 'all' && (selectedSector == ''|| selectedSector == 'all' )){

                  getTickets()
                }else if(selectedGroup != 'all' && (selectedSector == ''|| selectedSector == 'all' )){
                   getGroupTickets(selectedGroup)
                }
                else if(selectedGroup != 'all' && selectedSector != 'all'){
                  getSectorTickets()
               } 
               else if(selectedGroup == '' && selectedSector == ''){
                alert("Plz select Group and Sector")
             } 
                }

              }
          >
            < ImSearch />
            <div className="pl-2">Search</div>
          </button>
        </div>
      </div>

      <div className="w-11/12 mb-20">
        { ticketData && 

ticketData.map((item,index )=>(
            <div className="w-full" key={index}>
          <DataTablewithFilters columns={columns} data={item.data} airline={item.airline} logo={item.logo} />
          </div>
        ))
}
      </div>
    </main>
  );
};

export default Groups;
