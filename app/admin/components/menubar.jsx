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
  import { TbTimelineEventPlus ,TbUser,TbCashBanknote} from "react-icons/tb";
  import logo from '../../../public/logo.png'

  import Link from "next/link";
 

  import React from 'react'
import Image from "next/image";
  
  const AdminHeader = () => {
    return (
      <div >
<Menubar className=" border-b border-second bg-opacity-30 bg-gradient-to-r from-[#c4c4c4] to-[#d4e6f7] flex justify-between rounded-none py-10 pl-2 pr-8 font-sans  h-24 ">

<div className="w-5/12 text-2xl font-bold text-second flex items-center  text-slate-800">
<Image src={logo} alt="logo" className="w-28 h-24 mr-2 brightness-105" />
<h1 >Rehman Munir Travels</h1>
</div>

   {/* ============first */}


   <MenubarMenu>
    <MenubarTrigger> <SiGoogleforms  size ={16} className='mr-2'/> Reports</MenubarTrigger>


  
  </MenubarMenu>
   


  
  {/* =========================second */}
  <MenubarMenu>
    <MenubarTrigger> <SiGoogleforms  size ={16} className='mr-2'/> Misc. Forms</MenubarTrigger>


    <MenubarContent className=" rounded-none bg-white">
    <MenubarItem> <TbTimelineEventPlus className='mr-2'/><Link href ='/admin/form'>Available Tickets Form</Link></MenubarItem>

    <MenubarItem> <TbCashBanknote className='mr-2'/><Link href ='/admin/deposite'>Manage Deposits</Link></MenubarItem>

    <MenubarItem> <TbUser className='mr-2'/><Link href ='/admin/userform'>Create Users</Link></MenubarItem>
          
    </MenubarContent>
  </MenubarMenu>


  <MenubarMenu>
    
    <MenubarTrigger>
      <Link href={'/admin'}>
    <HiHome size ={20} color={"purple"} title="Home" className='mr-2 '/>
      </Link>
    </MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    
    <MenubarTrigger>
      <Link href={'/auth/signOut'}>
    <MdLogout size ={20} color={"purple"} title="Logout" className='mr-2 '/>
      </Link>
    </MenubarTrigger>
  </MenubarMenu>

 
</Menubar>








      </div>
    )
  }
  
  export default AdminHeader