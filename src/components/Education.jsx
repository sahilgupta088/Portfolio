import React from 'react';

const Education = ({ ref }) => {
    return (
        <div>
            <div className='my-12 px-2 lg:px-16'>
                <h1 ref={ref} id="education" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>Education</h1>

                <div className='mb-12'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-xl lg:text-2xl font-bold'>National Institute of Technology,Jamshedpur<span className='lg:hidden'><br /></span> (ECE)</h3>
                        <h3 className='hidden lg:block text-2xl font-bold'>Nov 2022 - Jul 2026</h3>
                    </div>
                    <h4 className='text-lg lg:text-xl'>Adityapur, Jamshedpur, Jharkhand</h4>
                </div>
                <div className='mb-12'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-2xl font-bold'>DAV Kapil Dev Public School<span className='lg:hidden'><br /></span> (XII-CBSE)</h3>
                        <h3 className='hidden lg:block text-2xl font-bold'>Mar 2019 - Mar 2021</h3>
                    </div>
                    <h4 className='text-lg lg:text-xl'>Ranchi, Jharkhand</h4>
                </div>
                <div className='mb-12'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-2xl font-bold'>Symbiosis Public School<span className='lg:hidden'><br /></span> (X-CBSE)</h3>
                        <h3 className='hidden lg:block text-2xl font-bold'>Mar 2018 - Mar 2019</h3>
                    </div>
                    <h4 className='text-lg lg:text-xl'>Ranchi, Jharkhand</h4>
                </div>

                
            </div>
        </div>
    );
};

export default Education;