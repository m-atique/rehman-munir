"use client"
import React, { useMemo, useState } from 'react'
import { ImBin2 } from "react-icons/im";
import { VscClearAll } from "react-icons/vsc";
import { IoMdSave,IoIosPeople } from "react-icons/io";
import { MdEditNote } from "react-icons/md";


const LabelInput =(props)=>{ 
  return(<div className='flex flex-row items-center justify-center w-full  sm:w-2/5 gap-2  bg-slate-100 rounded-md shadow-md p-1 shadow-slate-500 border border-slate-400'>
  <div className='flex items-center justify-center rounded-md font-bold bg-slate-400 sm:w-56 w-28 sm:text-normal text-sm p-1'>{props.label}</div>
  <input type={props.type} className='p-1 pl-4 rounded-md w-full text-slate-900 bg-slate-100'   value = {props.value} onChange={(e)=>props.setValue(e.target.value)}/>
</div>)
}

const Form = () => {
  const defaults = useMemo(()=>(
    {srNo:""}
  ),[])

  const [data,setData]=useState(defaults)
  return (
   <div className=' bg-gradient-to-br from-blue-200 pb-10  bg-green-100 flex flex-col items-center  '>
<div className=' bg-gradient-to-bl text-3xl sm:text-5xl font-extrabold  to-purple-600 from-blue-800 bg-clip-text text-center p-10 text-transparent '>Avaible Tickets</div>

<div className='flex sm:flex-row flex-col items-center justify-center w-5/6 border border-white rounded-2xl shadow-lg shadow-slate-700 bg-white bg-opacity-75 gap-5 p-10  flex-wrap'>

  {/* <div className='flex flex-row items-center  w-full   sm:pl-20  md:pl-28'> */}
<LabelInput type='text'label ='Sr.No' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>
{/* </div> */}
<div className='flex flex-row items-center justify-center w-full  sm:w-2/5 gap-2   rounded-md '></div>


<LabelInput type='date' label='Date' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInput type='text' label='AirLine' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>
<LabelInput type='file'label ='Logo' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInput type='text' label='Sector' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>



<LabelInput type='text' label='PNR' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>
<LabelInput type='text' label='Flight No' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInput type='text' label='Departure' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInput type='text' label='Dep.Time' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInput type='text' label='Arrival' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInput type='text' label='ArrivalTime' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>



<LabelInput type='text' label='Bag' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>
<LabelInput type='text' label='HandCarry' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>
<LabelInput type='text' label='Meal' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>
<LabelInput type='text' label='Purchase' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInput type='text' label='Sale' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>


<LabelInput type='text' label='Seats' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInput type='text' label='GivenName' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>


<LabelInput type='text' label='SendName' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<div>
<div className=' h-1/5 flex w-full items-center justify-center flex-wrap  gap-2 '>
                <button  className='disabled:bg-slate-500 pl-8 pr-10 py-2 rounded-md bg-red-600 text-white w-36'type ='button'
                onClick={()=>console.log("del")}
  
                > <div className='flex items-center'><ImBin2 className='size-3 mr-1'/> Delete</div></button>

                <button className=' pl-6 pr-5 py-2 rounded-md text-white w-36 bg-[#424949]' type ='button' onClick={()=>console.log("update")}>
                  <div className='flex items-center'><MdEditNote  className='size-5 mr-1 ' /> Update</div>
                  </button>

                <button className=' pl-8 pr-10 py-2 rounded-md bg-slate-800 text-white w-36'type='button' onClick={()=>console.log("reset")}><div className='flex items-center'><VscClearAll className='size-5 mr-1'/> Reset</div></button>
                
                <button className=' pl-8 pr-10 py-2 rounded-md text-white bg-[#04232C] w-36'  type ='submit'
                onClick={()=>console.log("save")}
                >
                <div className='flex items-center'><IoMdSave  className='size-5 mr-1 ' /> Save</div>
                  
                  </button>                
                
            </div>
</div>
</div>

   </div>
  )
}

export default Form