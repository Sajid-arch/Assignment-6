'use client';
import Idata from '@/app/contentType';
import { ExerciseContext } from '@/context/ExerciseContext';
import Link from 'next/link';
import { useContext } from 'react';

const Planbtn = () => {
    const {planExercises, setActiveTab, activeTab } = useContext(ExerciseContext) as {
        planExercises: Idata[];
        setActiveTab: React.Dispatch<React.SetStateAction<'plan' | 'saved'>>;
        activeTab: 'plan' | 'saved';
    };


    return (
        <Link href='/my-plan'>

        <button onClick={() => setActiveTab('plan')} className='cursor-pointer font-medium text-xs text-[#D1D5DB] flex flex-row justify-center items-center gap-2'>
            Plan <span className={`w-5 h-5 flex items-center justify-center rounded-full text-[11px] border-2 transition-all duration-300 ${activeTab === 'plan' ? 'bg-[#C2F800] font-bold text-black border-transparent' : 'border-[#374151] font-medium bg-transparent' }`}>{planExercises.length}</span>
        </button>
        </Link>
    );
};

export default Planbtn;