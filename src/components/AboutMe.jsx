import React from 'react';

const AboutMe = ({ ref }) => {
    return (
        <div className='my-12 px-2 lg:px-16'>
            
            <h1 ref={ref} id="about" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>About Me</h1>

            <p className='text-xl text-justify'>I'm a B.Tech (Hons) student in Electronics and Communication Engineering at NIT Jamshedpur, passionate about software development. My expertise lies in building full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern web technologies.</p>
            <br />

            <p className='text-xl text-justify'>I have a strong foundation in Data Structures, Object-Oriented Programming (OOPs), Operating Systems, and DBMS. My technical skill set includes languages like C, C++, Python, Javascript, and Typescript, along with tools like Git, Postman, and Docker.</p>
            <br />

            <p className='text-xl text-justify'>I have experience deploying applications on platforms like Vercel and Render. I am always eager to learn new technologies and apply my skills to solve real-world problems.</p>

        </div>
    );
};

export default AboutMe;