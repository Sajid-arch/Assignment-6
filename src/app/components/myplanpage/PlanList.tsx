'use client';
import Idata from '@/app/contentType';
import Link from 'next/link';
import React, { useContext } from 'react';
import { ExerciseContext } from '@/context/ExerciseContext';
import PlanListCard from './PlanListCard';


const PlanList = () => {
        const {planExercises, activeTab} = useContext(ExerciseContext) as {
                planExercises: Idata[];
                activeTab: 'plan' | 'saved';          
            };
    return (
      <>
        <div className={`tab-content ${planExercises.length > 0 ? 'hidden': activeTab === 'plan' ? 'block' : 'hidden'} px-4 py-24 mb-10 flex flex-col items-center justify-center bg-[#11131780] border-[#ffffff1a] rounded-xl`}>
      <h4 className={`${planExercises.length > 0 ? 'hidden' : 'block'} uppercase font-bold text-white text-xl font-heading`}>Nothing Here Yet</h4>
      <p className={`${planExercises.length>0? 'hidden' : 'block'} text-xs text-[#A1A1AA] mt-2`}>Browse the library and add a lift to get today moving.</p>
      <Link href='/#workout' className={`${planExercises.length>0? 'hidden' : 'block'} mt-6`}>
      <button className="cursor-pointer bg-[#C2F800] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#A0B600] transition-colors duration-300 uppercase">Browse Workouts</button>
      </Link>
      </div>
      <PlanListCard></PlanListCard>
      </>
    );
};

export default PlanList;