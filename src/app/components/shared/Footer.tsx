import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black border-t-2 border-gray-800 font-sans py-4 px-6 '>
            <div className='container mx-auto flex justify-between items-center'>
                <div className="flex space-x-1.5">
                    <Image width={16} height={16} src='/assets/footer logo.png' alt='Footer Logo'></Image>
                    <span className='font-heading font-bold text-sm'>FITLOG</span>
                </div>
                <p className='text-xs text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;