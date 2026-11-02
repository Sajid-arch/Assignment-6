'use client';
import { ExerciseContext } from '@/context/ExerciseContext';
import Link from 'next/link';
import { useContext } from 'react';

const Planbtn = () => {
    const context = useContext(ExerciseContext);
    const planExercises = context?.planExercises || [];

    return (
        <Link href='/my-plan'>

        <button className='cursor-pointer font-medium text-xs text-[#D1D5DB] flex flex-row justify-center items-center gap-2'>
            Plan <span className='w-5 h-5 flex flex-row items-center justify-center bg-[#C2F800] rounded-full font-bold text-black text-[11px]'>{planExercises.length}</span>
        </button>
        </Link>
    );
};

export default Planbtn;