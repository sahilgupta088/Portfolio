import React from 'react';
import { Link } from 'react-router';

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiLeaflet, SiOpenstreetmap } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5"; // Keeping if needed, though not explicitly mentioned for FoodShare but often used. User mentioned JWT, maybe just Node/Express.
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import foodshareImg from '../assets/foodshare.png';
const FoodShare = () => {
    return (
        <div className='my-2'>
            <div className='flex flex-col lg:flex-row  justify-between items-center gap-4 m-2 p-2 border-2 border-[#33333330] rounded-md h-full'>

                <div className='flex-1'>
                    <div className='flex justify-center items-center bg-white border-2 border-gray-100 rounded-md shadow-2xl p-4'>
                         {/* Placeholder image or reuse one until user provides one */}
                        <img src={foodshareImg} alt="FoodShare" className='w-[320px] rounded-md' />
                    </div>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-8'>
                        <span className='border-b-2 border-[#00df72]'>
                            FoodShare
                        </span>
                    </h1>
                    <p className='text-xl text-justify p-2'>Developed a full-stack MERN application to address food waste by connecting food donors with receivers through a real-time, map-based interface.</p>

                    <div className='grid grid-cols-4 gap-4 place-items-center my-8'>

                        <AiOutlineJavaScript className='text-5xl text-[#FFED29] border-2 bg-[#333333] border-[#333333] p-2 rounded-md' />
                        <FaReact className='text-5xl text-[#61DAFB] border-2 border-[#333333] p-2 rounded-md' />
                        <FaNodeJs className='text-5xl text-[#5FA04E] border-2 border-[#333333] p-2 rounded-md' />
                        <SiExpress className='text-5xl text-[#000000] border-2 border-[#333333] p-2 rounded-md' />

                        <SiMongodb className='text-5xl text-[#47A248] border-2 border-[#333333] p-2 rounded-md' />
                        <RiTailwindCssFill className='text-5xl text-[#06B6D4] border-2 border-[#333333] p-2 rounded-md' />
                        <SiLeaflet className='text-5xl text-[#199900] border-2 border-[#333333] p-2 rounded-md' />
                        <SiOpenstreetmap className='text-5xl text-[#7EBC6F] border-2 border-[#333333] p-2 rounded-md' />
                    </div>

                    <div className='grid grid-cols-1 gap-2 mr-2'>
                        {/* Link to details page if created, otherwise just a button or link to code/demo if available */}
                        {/* Link to project docs on Drive */}
                        <a href="https://docs.google.com/document/d/16CGo7BJkkUymGz_KfFHZEreML9Ck6sYH1qlEC5bk1zo/edit?tab=t.0#heading=h.6a74zdjk5a3d" target="_blank" rel="noopener noreferrer" className='w-full'>
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <FaCode />
                                Docs
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodShare;
