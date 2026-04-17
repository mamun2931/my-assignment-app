import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { RiTwitterXLine } from 'react-icons/ri';

const SocialPage = () => {
    return (
    <div className='bg-[#244D3F]'>
                <div className='md:w-7xl mx-auto'>
            <div className='pt-20 pb-10 text-center space-y-5'>
                <h1 className='text-7xl text-[#FFFFFF]'>keenkeeper</h1>
                <p className='text-[#FFFFFF95]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-[#FFFFFF] text-2xl font-semibold'>Social Links</p>
                <div className='flex space-x-5 justify-center'>
                   <div className='bg-[#FFFFFF] p-2 rounded-full hover:cursor-pointer hover:scale-105'> <FaSquareInstagram /></div>
                    <div className='bg-[#FFFFFF] p-2 rounded-full hover:cursor-pointer hover:scale-105'> <FaFacebookSquare /></div>
                    <div className='bg-[#FFFFFF] p-2 rounded-full hover:cursor-pointer hover:scale-105'><RiTwitterXLine /></div>
                </div>
            </div>

                <div className='border-t border-gray-500 w-7xl mx-auto'></div>

    <div className=' px-4 md:px-6 flex flex-col md:flex-row items-center justify-between py-10 text-gray-400 text-sm'>
        <p className='mb-4 md:mb-0'>
            © 2026 KeenKeeper. All rights reserved.
        </p>
        <div className='flex flex-wrap justify-center gap-x-6 gap-y-2'>
            <p className='hover:text-white transition-colors cursor-pointer'>Privacy Policy</p>
            <p className='hover:text-white transition-colors cursor-pointer'>Terms of Service</p>
            <p className='hover:text-white transition-colors cursor-pointer'>Cookie Policy</p>
        </div>
    </div>
        </div>
    </div>

    );
};

export default SocialPage;