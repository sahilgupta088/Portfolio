import React from 'react';
import { Link } from 'react-router';

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiPostgresql, SiTailwindcss, SiGoogle, SiVercel } from "react-icons/si";
import { FaCode } from "react-icons/fa6";

import fixItHostelImg from '../assets/fixit-hostel.png';

const FixItHostel = () => {
    return (
        <div className='my-2'>
            <div className='flex flex-col lg:flex-row  justify-between items-center gap-4 m-2 p-2 border-2 border-[#33333330] rounded-md h-full'>

                <div className='flex-1'>
                    <div className='flex justify-center items-center bg-white border-2 border-gray-100 rounded-md shadow-2xl p-4'>
                        {/* Placeholder image */}
                        <img src={fixItHostelImg} alt="FixIt-Hostel" className='w-[320px] rounded-md' />
                    </div>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-8'>
                        <span className='border-b-2 border-[#00df72]'>
                            FixIt-Hostel
                        </span>
                    </h1>
                    <p className='text-xl text-justify p-2'>Hostel maintenance management system with role-based dashboards, AI-powered ticket classification using Google Gemini, and PDF work order generation.</p>

                    <div className='grid grid-cols-4 gap-4 place-items-center my-8'>

                        <SiTypescript className='text-5xl text-[#3178C6] border-2 bg-[#333333] border-[#333333] p-2 rounded-md' />
                        <SiNextdotjs className='text-5xl text-[#000000] border-2 border-[#333333] p-2 rounded-md' />
                        <SiPostgresql className='text-5xl text-[#336791] border-2 border-[#333333] p-2 rounded-md' />
                        <SiTailwindcss className='text-5xl text-[#06B6D4] border-2 border-[#333333] p-2 rounded-md' />

                        <SiGoogle className='text-5xl text-[#4285F4] border-2 border-[#333333] p-2 rounded-md' />
                         {/* Gemini icon might not exist in react-icons/si directly as "SiGemini", using Google for now or generic AI */}
                        
                    </div>

                    <div className='grid grid-cols-1 gap-2 mr-2'>
                        {/* Link to project docs on Drive */}
                        <a href="https://docs.google.com/document/d/1W9WDVfEAKKIsocnbakO7imcchjGoG3zuWl8YE5OGM2s/edit?tab=t.0#heading=h.8zhy293r8qqf" target="_blank" rel="noopener noreferrer" className='w-full'>
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

export default FixItHostel;
