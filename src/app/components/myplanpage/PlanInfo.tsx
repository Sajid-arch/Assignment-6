'use client';
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';
import Idata from '../../contentType';

const PlanInfo = () => {
    const {planExercises , activeTab} = useContext(ExerciseContext) as {
                planExercises: Idata[];
                activeTab: 'plan' | 'saved';           
            };
    const restExercise = planExercises.filter(item => !item.completed);
    return (
        <div className={`${activeTab === 'plan' ? 'block' : 'hidden'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center bg-[#13161D] border-2 border-[#232732] rounded-2xl px-6 pt-8 pb-6 my-6`}>
            <div>
              <h4 className='text-xs text-[#8A92A0] text-left'>Exercises</h4>
              <h5 className={`text-4xl font-heading font-bold ${restExercise.length > 0 ? 'text-[#CCFF00]' : 'text-white'}`}>{restExercise.length}</h5>
            </div>
            <div className='border-t-2 border-[#232732a4] pt-4 md:border-l-2 md:border-t-0 md:py-0 md:pl-8 md:pt-0'>
              <h4 className='text-xs text-[#8A92A0] text-left'>Minutes</h4>
              <h5 className='text-4xl font-heading font-bold text-white'>{restExercise.length > 0 ? restExercise.reduce((total, exercise) => total + exercise.duration, 0) : 0}</h5>
            </div> 
            <div className='border-t-2 border-[#232732a4] pt-4 md:border-l-2 md:border-t-0 md:py-0 md:pl-8 md:pt-0'>
              <h4 className='text-xs text-[#8A92A0] text-left'>Calories</h4>
              <h5 className='text-4xl font-heading font-bold text-white'>{restExercise.length > 0 ? restExercise.reduce((total, exercise) => total + exercise.caloriesBurned, 0) : 0}</h5>
            </div>
          </div>
    );
};

export default PlanInfo;