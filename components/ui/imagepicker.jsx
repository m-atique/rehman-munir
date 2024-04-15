'use client'
import React from 'react'

const ImgPicker = (props) => {




  const handleDocchange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        props.setter(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
 

 
  return (
    <div className=' rounded-sm w-full bg-slate-100 border border-slate-500'>
    <div className={`w-full rounded-sm    flex flex-col text-sm font-sans items-center gap-2 font-semibold justify-between`}>
        <input maxLength={500} spellCheck= {true} type = 'file'  onChange={handleDocchange}  accept="image/*" className='p-2   w-full font-normal focus:outline-0 rounded-md ml-2 focus:border-blue-400 mr-3 focus:border focus:rounded-md  '  />
        
    </div>

    </div>
  )
}

export default ImgPicker