'use client';
import { ExerciseContext } from '@/context/ExerciseContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const Savebtn = () => {
        const context = useContext(ExerciseContext);
        const saveExercise = context?.saveExercise || [];
    return (
        <Link href='/my-plan'>

        <button className='cursor-pointer font-medium text-xs text-[#D1D5DB] flex flex-row justify-center items-center gap-2'>
            Saved <span className='w-5 h-5 flex flex-row items-center justify-center bg-transparent border-2 border-[#374151] rounded-full font-medium text-[11px]'>{saveExercise.length}</span>
        </button>
        </Link>
        // <button className='font-medium text-xs text-[#D1D5DB]'>Saved</button>
    );
};

export default Savebtn;