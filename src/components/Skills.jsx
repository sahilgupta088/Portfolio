import React from 'react';
import Marquee from "react-fast-marquee";

const Skills = ({ ref }) => {
    return (
        <div className='my-24 px-2 lg:px-16'>

            <h1 ref={ref} id="skills" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>Skills</h1>

            {/* <Marquee className='mb-4 lg:mb-24'> */}
            <div className='mb-2 flex justify-center items-center'>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/RTYr3R8K/html.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/zVLbx2vd/css.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/s9mr5SrN/tailwindcss.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/mFqQR63X/git.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="" />
                </div>
            </div>
            {/* </Marquee> */}

            {/* <Marquee direction="right"> */}
            <div className='mb-2 flex justify-center items-center'>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/B5bBssz7/javacsript.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/VYycSH4m/react.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/Gfz1Mgd8/nextjs.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/JFM8krnK/nodejs.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/39NJrHsN/expressjs.png" alt="" />
                </div>
                <div>
                    <img className='mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px]' src="https://i.ibb.co/JwBVXnwW/mongodb.png" alt="" />
                </div>
                
            </div>
            <div className='mb-2 flex justify-center items-center'>
                
                
                {/* </Marquee> */}
            </div>
        </div>
    );
};

export default Skills;
