'use client';
import Idata from '@/app/contentType';
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext, useEffect } from 'react';


const ListToggleButton = () => {
    const {activeTab, setActiveTab, sortBy, setSortBy, setSortedPlanExercises, setSortedSaveExercise, planExercises, saveExercise} = useContext(ExerciseContext) as {
            activeTab: 'plan' | 'saved';
            setActiveTab: React.Dispatch<React.SetStateAction<'plan' | 'saved'>>;            
            sortBy: 'Duration' | 'Calories' | 'Rating';
            setSortBy: React.Dispatch<React.SetStateAction<'Duration' | 'Calories' | 'Rating'>>;
            setSortedPlanExercises: React.Dispatch<React.SetStateAction<Idata[]>>;
            setSortedSaveExercise: React.Dispatch<React.SetStateAction<Idata[]>>;
            planExercises: Idata[];
            saveExercise: Idata[];
        };

        useEffect(() => {
        const sortedExercise = [...planExercises];

        if (sortBy === 'Rating') {
            sortedExercise.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'Duration') {
            sortedExercise.sort((a, b) => b.duration - a.duration);
        } else if (sortBy === 'Calories') {
            sortedExercise.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }

        setSortedPlanExercises(sortedExercise);
    }, [sortBy, planExercises, setSortedPlanExercises]);

        useEffect(() => {
        const sortedExercise = [...saveExercise];

        if (sortBy === 'Rating') {
            sortedExercise.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'Duration') {
            sortedExercise.sort((a, b) => b.duration - a.duration);
        } else if (sortBy === 'Calories') {
            sortedExercise.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }

        setSortedSaveExercise(sortedExercise);
    }, [sortBy, saveExercise, setSortedSaveExercise]);

    return (
        <div className="mb-4 flex w-full flex-col items-stretch justify-between gap-3 sm:flex-row sm:flex-wrap sm:items-center">
    <div className="flex w-full flex-row items-center justify-center gap-1 rounded-xl border-2 border-[#232732] bg-[#151921] p-1 text-xs sm:w-auto sm:gap-2">
  <button onClick={() => setActiveTab('plan')} className={`flex-1 cursor-pointer rounded-lg border-2 px-3 py-1.5 transition-all duration-300 sm:flex-none sm:px-6 ${activeTab === 'plan'? 'bg-[#1F242D] border-[#2B303D] text-[#FFFFFF] font-bold':'border-transparent text-[#8A92A0] font-normal'} `}>Today&apos;s Plan</button>
  <button onClick={() => setActiveTab('saved')} className={`flex-1 cursor-pointer rounded-lg border-2 px-3 py-1.5 transition-all duration-300 sm:flex-none sm:px-6 ${activeTab === 'saved'? 'bg-[#1F242D] border-[#2B303D] text-[#FFFFFF] font-bold':'border-transparent text-[#8A92A0] font-normal'} `}>Saved</button>
    </div>
    <div className="flex w-full flex-col gap-3 sm:flex-1 sm:flex-row sm:items-center sm:justify-end">
    <div className="flex w-full flex-row items-center justify-between gap-2 text-xs text-[#8A92A0] sm:w-auto sm:justify-center">
        <h4 className="text-xs text-[#8A92A0]">Sort By</h4>

    <div className="relative">
    <select aria-label="Sort exercises by" value={sortBy} onChange={(e) => setSortBy(e.target.value as "Duration" | "Calories" | "Rating")} className="select w-28 appearance-none rounded-lg border-2 border-[#232732] bg-[#13161D] pr-8 text-xs text-white">
  <option value={"Duration"}>Duration</option>
  <option value={"Calories"}>Calories</option>
  <option value={"Rating"}>Rating</option>
    </select>
    </div>
    </div>
    </div>
  </div>
    );
};

export default ListToggleButton;