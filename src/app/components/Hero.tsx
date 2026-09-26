import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Showsection from './Showsection';

const Hero = () => {
    return (
        <section className="py-14">
            <div className="container mx-auto bg-[#15171D] rounded-2xl p-5 md:p-10 lg:p-14 md:gap-0 gap-5 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center items-start space-y-4">
                    <span className="text-[11px] text-[#C2F800] font-bold uppercase tracking-wider">Workout Library</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className="text-md text-[#9CA3AF]">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                   <Showsection></Showsection>
                </div>
                <div className="flex justify-center items-center">
                    <Image className="rounded-2xl" src="/assets/banner.png" loading="eager" alt="Hero Image" width={400} height={400}></Image>
                    
                </div>
            </div>
        </section>
    );
};

export default Hero;