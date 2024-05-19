// components/CustomAlert.js

import React from 'react';
import { TbAlertOctagonFilled } from "react-icons/tb";

const CustomAlert = ({ message, onClose,head,color,btn }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded shadow-md">
        <div className={`font-bold text-3xl ${color}  mb-1`}>
          <div className='flex gap-2'>
          {/* <TbAlertOctagonFilled  /> */}
          {head}
          </div>
          </div>
        <p className="text-xl font-bold mb-4">{message}</p>
        <button
          className="mt-4 px-4 py-2  w-96 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={onClose}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
