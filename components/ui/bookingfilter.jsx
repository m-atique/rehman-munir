"use client"
import React,{useState,useEffect} from 'react'
import {Selector} from './selector'


const Bookingfilter = (props) => {
  const Today =new Date().toISOString().split('T')[0]




  return (
    <div className=" bg-steal-400 p-1   justify-center  flex flex-row gap-5">
      <div className="flex flex-row gap-3">
      <div className={styles.subDiv}>
        {/* Type */}
        <label htmlFor="Type" className={styles.labels}>Sector</label>
       
          <div className='border rounded-md text-blue-800 border-blue-800 bg-white'>
            <Selector
              data={props.sectors}
              value={props.selectedSector}
              setValue={props.setSelectedSector}
            />
          </div>
          </div>


          {/* Date */}
          <div className={styles.subDiv}>
          <label htmlFor="date" className={styles.labels}>Dep. Date</label>
        <input type="date" 
        name="Date"  
        value={props.date}
        onChange={e=>props.setDate(e.target.value)}
        className='px-2 py-1 text-blue-800 font-semibold border rounded-md border-blue-800 bg-white' />
        </div>
        </div>

        <div className="flex flex-row gap-3">
          {/* Sector */}
          <div className={styles.subDiv}>
          <label htmlFor="sector" className={styles.labels}>Status</label>
          <div className='border rounded-md text-blue-800 border-blue-800 bg-white'>
            <Selector
              data={props.statuses}
              value={props.selectedStatus}
              setValue={props.setSelectedStatus}
            />
            </div>
            </div>
       {/* end time */}
      
         </div>
        
    </div>
  )
}

export default Bookingfilter


const styles={
  labels:" text-white  text-sm bg-blue-900 rounded-md mb-1",
  subDiv:'flex flex-col  text-center justify-end'
}