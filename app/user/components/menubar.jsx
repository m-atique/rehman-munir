import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { PiStudentFill } from "react-icons/pi";
  import { SiFormstack,SiGoogleclassroom,SiHomeadvisor,SiGoogleforms  } from "react-icons/si";
  import { AiOutlineApartment, AiOutlineDollarCircle } from "react-icons/ai";
  import { BsCashCoin } from "react-icons/bs";
  import { HiHome } from "react-icons/hi2";
  import { MdOutlineLocalLibrary,MdMoveUp, MdLogout } from "react-icons/md";
  import { FaDollarSign, FaMoneyCheckDollar } from "react-icons/fa6";
  import { TbTimelineEventPlus } from "react-icons/tb";
  import { GiBookmark } from "react-icons/gi";
  import logo from '../../../public/logo.png'

  import Link from "next/link";
 

  import React from 'react'
import Image from "next/image";
  
  const UserHeader = () => {
    return (
      <div >
<Menubar className=" border-b border-second  bg-gradient-to-r from-base to-slate-100 flex justify-between rounded-none py-10 pl-2 pr-8 font-sans  ">

<div className="w-5/12 text-2xl font-bold text-second flex items-center ">
<Image src={logo} alt="logo" className="w-24 h-20 mr-2" />

</div>

   {/* ============first */}

   <MenubarMenu>
    <MenubarTrigger > 
    <Link href={'/user/ledger' } className="flex items-center kustify-center">
    <SiGoogleforms  size ={16} className='mr-2'/>
    <div>My Ledger</div>
    </Link>
    </MenubarTrigger>
  </MenubarMenu>
  
   
  <MenubarMenu>
    <MenubarTrigger >
    <Link href={'/user/bookings' } className="flex items-center kustify-center">
    <GiBookmark  size ={20} className='mr-2'/>
    <div>Bookings</div> 
      </Link>
    </MenubarTrigger>
       
  </MenubarMenu>

 


  <MenubarMenu>
    
    <MenubarTrigger>
      <Link href={'/user'}>
    <HiHome size ={20} color={"purple"} title="Home" className='mr-2 '/>
      </Link>
    </MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    
    <MenubarTrigger>
      <Link href={'/auth/signOut'}>
    <MdLogout size ={20} color={"purple"} title="Home" className='mr-2 '/>
      </Link>
    </MenubarTrigger>
  </MenubarMenu>

 
</Menubar>








      </div>
    )
  }
  
  export default UserHeader