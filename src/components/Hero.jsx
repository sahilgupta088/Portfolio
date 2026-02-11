import React from 'react';

import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import profileImg from '../assets/profile.png';

const Hero = ({ ref }) => {
    return (
        <div ref={ref} id='hero' className='scroll-mt-36 my-2 lg:my-12 px-2 lg:px-16'>
            <div className='flex flex-col-reverse lg:flex-row justify-evenly items-center gap-4'>
                <div className='flex-1'>
                    <h1 className='text-5xl lg:text-7xl mb-4 lg:mb-8'> Sahil Gupta</h1>
                    <h3 className='text-xl lg:text-3xl mb-4'> <span className='border-b-2 border-[#00df72]'>Full Stack Developer</span></h3>
                    <p className='text-xl'>Passionate Electronics and Communication Engineering student with strong full-stack development skills, building responsive and dynamic web applications.</p>

                    <div className='flex justify-start items-center gap-4 my-6'>

                        <a href="https://www.linkedin.com/in/sahilgupta088/" target="_blank">
                            <button className='hover:cursor-pointer'>
                                <FaLinkedin className='text-center bg-[#fbf7f4] w-9 h-9 text-[#0077B5] m-0 p-0 rounded-xs' />
                            </button>
                        </a>

                        <a href="https://github.com/sahilgupta088" target="_blank">
                            <button className='hover:cursor-pointer'>
                                <FaGithubSquare className='text-center bg-[#fbf7f4] w-9 h-9 text-[#333333] m-0 p-0 rounded-xs' />
                            </button>
                        </a>

                    </div>

                    <button className='bg-[#00df72] px-16 py-4 text-xl rounded-md'>


                        <a href="https://drive.google.com/file/d/17wKmMNT6jo7K1EZeBai9FygeJaYBX9Dd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <span className='flex justify-center items-center gap-2'>
                                <SiReaddotcv />
                                
                                <span>Resume</span>
                            </span>

                        </a>
                    </button>
                </div>
                <div className='flex-1 '>
                    <div className='flex justify-center items-center'>
                        {/* Profile Picture */}
                        <img className='border-2 border-black-100 rounded-full w-[500px] h-[500px] object-cover shadow-xl' src={profileImg} alt="Sahil Gupta" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;