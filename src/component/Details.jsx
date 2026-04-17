"use client"
import { useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { HiBellSnooze } from "react-icons/hi2";
import { IoMdText } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ParsonContext } from "./ParsonProvider";





const Details = ({ post }) => {

    const { handelButton } = useContext(ParsonContext);



    return (
             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
                
             
                <div className="md:col-span-4 space-y-4">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                        <img
                            src={post?.picture}
                            alt={post?.name}
                            className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md"
                        />
                        <h2 className="text-xl font-bold mt-4 text-gray-800">{post?.name}</h2>
                        
                        <div className="flex flex-col items-center gap-2 mt-3">
                            <span className={`px-4 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                                post?.status === 'overdue' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                            }`}>
                                {post?.status}
                            </span>
                            <div className="flex gap-2">
                                {post?.tags?.map((tag, i) => (
                                    <span key={i} className="bg-green-100 text-green-700 px-3 py-1 text-xs font-medium rounded-full uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 italic text-sm uppercase">"{post?.bio}"</p>
                        <p className="mt-2 text-xs text-gray-400 font-medium uppercase">"Preferred: {post?.email}"</p>
                    </div>

                   
                    <div className="space-y-2">
                        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm hover:bg-gray-50 flex items-center justify-center gap-2 font-medium">
                            <HiBellSnooze /> Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm hover:bg-gray-50 flex items-center justify-center gap-2 font-medium text-gray-600">
                            <FaBoxArchive /> Archive
                        </button>
                        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm hover:bg-red-50 flex items-center justify-center gap-2 font-medium text-red-500">
                            <RiDeleteBin5Line /> Delete
                        </button>
                    </div>
                </div>

             
                <div className="md:col-span-8 space-y-6">
                    
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                            <p className="text-3xl font-bold text-gray-800">{post?.days_since_contact}</p>
                            <p className="text-sm text-gray-500">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                            <p className="text-3xl font-bold text-gray-800">{post?.goal}</p>
                            <p className="text-sm text-gray-500">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                            <p className="text-xl font-bold text-gray-800">{post?.next_due_date}</p>
                            <p className="text-sm text-gray-500">Next Due</p>
                        </div>
                    </div>

                   
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold text-gray-700">Relationship Goal</h3>
                            <p className="text-gray-500">Connect every <span className="font-bold text-black">30 days</span></p>
                        </div>
                        <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">Edit</button>
                    </div>

                    
                    <div className="bg-white p-6 rounded-2xl border border-gray-100">
                        <h3 className="font-semibold text-gray-700 mb-4">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                                <button onClick={()=> handelButton({...post, type:"Call"})} className="border hover:cursor-pointer border-gray-200 py-6 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center gap-2">
                                    <span className="text-2xl"><IoCall /></span>
                                    <span className="text-sm font-medium"> Call</span>
                                </button>
                                <button onClick={()=> handelButton({...post, type:"Text"})} className="border  hover:cursor-pointer border-gray-200 py-6 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center gap-2">
                                    <span className="text-2xl"><IoMdText /></span>
                                    <span className="text-sm font-medium"> Text</span>
                                </button>
                                <button onClick={()=> handelButton({...post, type:"Video"})} className="border  hover:cursor-pointer border-gray-200 py-6 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center gap-2">
                                    <span className="text-2xl"><FaVideo /></span>
                                    <span className="text-sm font-medium"> Video</span>
                                </button>
                            
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default Details;