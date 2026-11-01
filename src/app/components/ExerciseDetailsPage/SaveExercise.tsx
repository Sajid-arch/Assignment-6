import React from 'react';
import { MdOutlineBookmarkAdded } from "react-icons/md";

const SaveExercise = () => {
    return (
        <button className="flex flex-row justify-around gap-1 items-center bg-transparent border-2 border-[#374151] text-[#E5E7EB] font-semibold text-[14px] px-6 py-3 rounded-xl mt-6 hover:bg-[#CCFF00] hover:border-[#CCFF00] hover:text-[#0F1115]  active:scale-95  transition-all duration-300 cursor-pointer"><MdOutlineBookmarkAdded />Save for later</button>
    );
};

export default SaveExercise;