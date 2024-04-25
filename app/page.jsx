'use client'
import Image from "next/image";
import { useEffect } from "react";
import axios  from 'axios'
import Link from "next/link";
import { useSession } from "next-auth/react";
import AdminHome from "./admin/page";
import UserHome from './user/page'
import { useRouter } from 'next/navigation'

export default function Home() {
  const {data} = useSession()
  const router = useRouter()

  useEffect(() => {
    if(data?.user.role == 'admin'){
     router.push('/admin')
    }else if (data?.user.role == 'admin'){
      router.push('/user')
    }
  
   
  }, [data])
  

    return (
      <div className="text-center flex items-center justify-center w-screen h-screen">
       <h1>Loading ......</h1> 

      {/* <Link href={'/auth/signOut'} className="bg-red-500 p-2 font-bold ">Sign Out </Link> */}
      
      </div>
    );
 
 
}
