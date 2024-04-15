'use client'
import Image from "next/image";
import axios  from 'axios'
import Link from "next/link";

export default function Home() {
const getUser= async () =>{
 const users = await axios.post('/api/users/getUser',{gmail:"atique@gmail.com"})
 console.log(typeof(users.data[0].hash))
 return users
}
  return (
    <div>
      <Link href={'/auth/signOut'} className="  bg-yellow-500 m-2 p-2" >SignOut</Link>
    
    </div>
  );
}
