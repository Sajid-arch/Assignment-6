'use client';
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';
import { GoChevronDown } from 'react-icons/go';


const ListToggleButton = () => {
    const {activeTab, setActiveTab, sortBy, setSortBy, searchQuery, setSearchQuery} = useContext(ExerciseContext) as {
            activeTab: 'plan' | 'saved';
            setActiveTab: React.Dispatch<React.SetStateAction<'plan' | 'saved'>>;            
            sortBy: 'Duration' | 'Calories' | 'Rating';
            setSortBy: React.Dispatch<React.SetStateAction<'Duration' | 'Calories' | 'Rating'>>;
            searchQuery: string;
            setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
        };
    return (
        <div className="mb-4 flex w-full flex-col items-stretch justify-between gap-3 sm:flex-row sm:flex-wrap sm:items-center">
    <div className="flex w-full flex-row items-center justify-center gap-1 rounded-xl border-2 border-[#232732] bg-[#151921] p-1 text-xs sm:w-auto sm:gap-2">
  <button onClick={() => setActiveTab('plan')} className={`flex-1 cursor-pointer rounded-lg border-2 px-3 py-1.5 transition-all duration-300 sm:flex-none sm:px-6 ${activeTab === 'plan'? 'bg-[#1F242D] border-[#2B303D] text-[#FFFFFF] font-bold':'border-transparent text-[#8A92A0] font-normal'} `}>Today&apos;s Plan</button>
  <button onClick={() => setActiveTab('saved')} className={`flex-1 cursor-pointer rounded-lg border-2 px-3 py-1.5 transition-all duration-300 sm:flex-none sm:px-6 ${activeTab === 'saved'? 'bg-[#1F242D] border-[#2B303D] text-[#FFFFFF] font-bold':'border-transparent text-[#8A92A0] font-normal'} `}>Saved</button>
    </div>
    <div className="flex w-full flex-col gap-3 sm:flex-1 sm:flex-row sm:items-center sm:justify-end">
        <label htmlFor="plan-search" className="sr-only">Search plan or saved exercises by name or tag</label>
        <input
          id="plan-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search by name or tag..."
          className="w-full rounded-lg border-2 border-[#232732] bg-[#13161D] px-3 py-2 text-xs text-white placeholder:text-[#8A92A0] focus:border-[#C2F800] focus:outline-none sm:max-w-64"
        />
    <div className="flex w-full flex-row items-center justify-between gap-2 text-xs text-[#8A92A0] sm:w-auto sm:justify-center">
        <h4 className="text-xs text-[#8A92A0]">Sort By</h4>

    <div className="relative">
    <select aria-label="Sort exercises by" value={sortBy} onChange={(e) => setSortBy(e.target.value as "Duration" | "Calories" | "Rating")} className="select w-28 appearance-none rounded-lg border-2 border-[#232732] bg-[#13161D] pr-8 text-xs text-white">
  <option value={"Duration"}>Duration</option>
  <option value={"Calories"}>Calories</option>
  <option value={"Rating"}>Rating</option>
    </select>
    <GoChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white" />
    </div>
    </div>
    </div>
  </div>
    );
};

export default ListToggleButton;