'use client'
import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import Image from 'next/image';
import logo from '@/public/logo.png';
import { useRouter } from 'next/navigation';
import { User2, KeyRound } from 'lucide-react';
import axios from 'axios';

const Signinhandle = () => {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [emptyUser, setEmptyUser] = useState(false);
    const [emptyPwd, setEmptyPwd] = useState(false);

    const router = useRouter();

    const onSubmit = async () => {
        await signIn('credentials', {
            username: user,
            password: pwd,
            redirect: true,
            callbackUrl: '/'
        });
    };

    const login = async () => {
        if (!user) {
            setEmptyUser(true);
            setEmptyPwd(false);
        } else if (user && !pwd) {
            setEmptyUser(false);
            setEmptyPwd(true);
        } else if (user && pwd) {
            setEmptyUser(false);
            setEmptyPwd(false);

            const result = await axios.get(`/users/getUser/${user}`);
            if (result.data.hash === pwd) {
                router.push('/');
            } else {
                alert("Wrong password");
            }
        }
    };

    return (
        <div className="bg-[url('/loginbg.jpg')] brightness-105 bg-cover min-h-screen flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-10">
                <Image src={logo} alt="logo" width={90} height={90} className="brightness-125" />
                <h1 className="text-white text-3xl font-bold bg-gradient-to-r from-green-100 to-yellow-100 bg-clip-text">Rehman Munir Travels Faisalabad</h1>
            </div>
            <div className="w-full max-w-md bg-opacity-90 bg-slate-300 p-10 rounded-lg shadow-lg">
                <h1 className="text-3xl font-extrabold text-teal-800 mb-5">Log <span className="text-orange-400">in</span></h1>
                {emptyUser && <p className="text-xs text-red-600">Please Enter User ID</p>}
                <div className="flex items-center border rounded-lg mb-4">
                    <User2 stroke="#051532" className="w-8 h-8 p-2" />
                    <input
                        className="p-3 w-full pl-10 text-black"
                        placeholder="User"
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                {emptyPwd && <p className="text-xs text-red-600">Please Enter Password</p>}
                <div className="flex items-center border rounded-lg mb-4">
                    <KeyRound stroke="#051532" className="w-8 h-8 p-2" />
                    <input
                        className="p-3 w-full pl-10 text-black"
                        placeholder="Password"
                        type="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={onSubmit}
                        className="bg-blue-900 p-3 w-3/5 rounded-md text-white text-md font-semibold">Sign in</button>
                </div>
                <div className="mt-10 text-center text-teal-900 text-xs italic">
                    <p>Copyrights&copy; reserved by Rehman Munir Travels</p>
                    <p>Developed by Techno Hub Faisalabad</p>
                </div>
            </div>
        </div>
    );
};

export default Signinhandle;
