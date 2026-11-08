'use client';
import Idata from '@/app/contentType';
import { ExerciseContext } from '@/context/ExerciseContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import SaveListCard from './SaveListCard';

const SaveList = () => {
        const {saveExercise , activeTab} = useContext(ExerciseContext) as {
                saveExercise: Idata[];
                activeTab: 'plan' | 'saved';         
            };
    return (
      <>
          <div className={`tab-content ${saveExercise.length > 0 ? 'hidden': activeTab === 'saved' ? 'block' : 'hidden'} px-4 py-24 mb-10 flex flex-col items-center justify-center bg-[#11131780] border-[#ffffff1a] rounded-xl`}>
            <h4 className={`${saveExercise.length>0? 'hidden' : 'block'} uppercase font-bold text-white text-xl font-heading`}>Nothing Here Yet</h4>
            <p className={`${saveExercise.length>0? 'hidden' : 'block'} text-xs text-[#A1A1AA] mt-2`}>Browse the library and add a lift to get today moving.</p>
            <Link href='/#workout' className={`${saveExercise.length>0? 'hidden' : 'block'} mt-6`}>
              <button className="cursor-pointer bg-[#C2F800] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#A0B600] transition-colors duration-300 uppercase">Browse Workouts</button>
            </Link>
          </div>
          <SaveListCard></SaveListCard>
      </>

    );
};

export default SaveList;