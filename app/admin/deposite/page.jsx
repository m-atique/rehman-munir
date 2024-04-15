"use client"
import React, { useMemo, useState } from 'react'
import { ImBin2 } from "react-icons/im";
import { VscClearAll } from "react-icons/vsc";
import { IoMdSave,IoIosPeople } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import { Selector } from '@/components/ui/selector';


const LabelInputSelect =(props)=>{ 
  return(<div className='flex flex-col items-centstart  justify-start  gap-2 '>
  <div className='flex items-start justify-start rounded-md  sm:text-normal text-sm p-1'>{props.label}</div>
  {/* <input type={props.type} className='p-1 pl-4  border brounded-md w-full text-slate-900 bg-slate-50 border-slate-800 '   value = {props.value} onChange={(e)=>props.setValue(e.target.value)}/> */}
  <div className='p-1 pl-4  border brounded-md w-full text-slate-900 bg-slate-50 border-slate-800 '>
  <Selector data={[]} />
  </div>
</div>)
}
const LabelInputText =(props)=>{ 
  return(<div className='flex flex-col items-centstart  justify-start  gap-2 '>
  <div className='flex items-start justify-start rounded-md  sm:text-normal text-sm p-1'>{props.label}</div>
  <input type={props.type} className='p-2 pl-4  border brounded-md w-full text-slate-900 bg-slate-50 border-slate-800 '   value = {props.value} onChange={(e)=>props.setValue(e.target.value)}/>
  
</div>)
}

const Form = () => {
  const defaults = useMemo(()=>(
    {srNo:""}
  ),[])

  const [data,setData]=useState(defaults)
  return (
   <div className=' bg-gradient-to-br from-blue-200 pb-10  bg-green-100 flex flex-col items-center min-h-screen '>
<div className=' bg-gradient-to-bl text-3xl sm:text-5xl font-extrabold  to-purple-600 from-blue-800 bg-clip-text text-center p-10 text-transparent '>Manage Deposits</div>

<div className='flex sm:flex-row flex-col items-start justify-start w-11/12 border border-white rounded-2xl shadow-lg shadow-slate-700 bg-white bg-opacity-75 gap-5 p-10  flex-wrap'>

<LabelInputSelect type='text' label='Payment Mode' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>


<LabelInputSelect type='text' label='Beneficiary Account' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>



<LabelInputSelect type='text' label='Agent Account' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>


<LabelInputText type='text' label='Amount' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInputSelect type='date' label='Payment Date' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>



<LabelInputSelect type='text' label='Document Ref. No' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>

<LabelInputText type='file'label ='Attach Doc.' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>
<div>

</div>
<div className='w-11/12'>
<LabelInputText type='text' label='Remarks' value = {data.srNo} setValue={(value)=>setData({...data,srNo:value})}/>
</div>
<div className=' h-1/5 flex w-11/12 items-center justify-end flex-wrap  gap-2 '>
             

                {/* <button className=' pl-8 pr-10 py-2 rounded-md bg-slate-800 text-white w-36'type='button' onClick={()=>console.log("reset")}><div className='flex items-center'><VscClearAll className='size-5 mr-1'/> Reset</div></button> */}
                
                <button className=' pl-8 pr-10 py-2 rounded-md text-white bg-blue-800 w-36'  type ='submit'
                onClick={()=>console.log("save")}
                >
                <div className='flex items-center justify-center'> Deposit</div>
                  
                  </button>                
                
</div>
</div>

   </div>
  )
}

export default Form