'use client';
import React from 'react';
import { MdOutlineAddToPhotos } from "react-icons/md";

const AddPlanBtn = () => {
    const handlePlanAdd = () => {
        console.log('button Working');
    };
    return (
        <button onClick={() => handlePlanAdd()} className="flex flex-row justify-around gap-1 items-center bg-[#CCFF00] border-[#CCFF00] text-[#0F1115] font-semibold text-[14px] px-6 py-3 rounded-xl mt-6 hover:bg-transparent border-2 hover:border-[#374151] hover:text-[#E5E7EB] active:scale-95  transition-all duration-300 cursor-pointer"><MdOutlineAddToPhotos /> Add to today&apos;s plan</button>
    );
};

export default AddPlanBtn;