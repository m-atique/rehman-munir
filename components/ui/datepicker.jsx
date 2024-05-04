"use client";
import React, { useState, useEffect } from "react";

const Datepicker = (props) => {
  return (
    <div className=" bg-steal-400 p-1   justify-center  flex flex-row gap-5">
      <div className="flex flex-row gap-3">
        <div className={styles.subDiv}>
          {/* start date */}
          <label htmlFor="startdate" className={styles.labels}>
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={props.startDate}
            onChange={(e) => props.setStartDate(e.target.value)}
            className="px-2 py-1 text-blue-800 font-semibold border rounded-md border-blue-800 bg-white"
          />
        </div>
        {/* End date */}
        <div className={styles.subDiv}>
          <label htmlFor="endDate" className={styles.labels}>
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={props.endDate}
            onChange={(e) => props.setEndDate(e.target.value)}
            className="px-2 py-1 text-blue-800 font-semibold border rounded-md border-blue-800 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Datepicker;

const styles = {
  labels: " text-white  text-sm bg-blue-900 rounded-md mb-1",
  subDiv: "flex flex-col  text-center justify-end",
};
