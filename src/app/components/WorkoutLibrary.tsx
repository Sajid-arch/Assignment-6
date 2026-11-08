'use client';

import Idata from '@/app/contentType';
import { ExerciseContext, exerciseMatchesSearch } from '@/context/ExerciseContext';
import React, { useContext } from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutLibrary = ({ exercises }: { exercises: Idata[] }) => {
    const { searchQuery, setSearchQuery } = useContext(ExerciseContext) as {
        searchQuery: string;
        setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    };
    const filteredExercises = exercises.filter(exercise =>
        exerciseMatchesSearch(exercise, searchQuery)
    );

    return (
        <>
            <label htmlFor="workout-search" className="sr-only">Search workouts by name or tag</label>
            <input
                id="workout-search"
                type="search"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                placeholder="Search workouts by name or tag..."
                className="mt-4 w-full rounded-lg border-2 border-[#232732] bg-[#13161D] px-4 py-3 text-sm text-white placeholder:text-[#8A92A0] focus:border-[#C2F800] focus:outline-none"
            />
            {filteredExercises.length > 0 ? (
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredExercises.map(exercise => (
                        <WorkoutCard key={exercise.id} workoutData={exercise} />
                    ))}
                </div>
            ) : (
                <p className="mt-6 text-sm text-[#9CA3AF]" role="status">No workouts match your search.</p>
            )}
        </>
    );
};

export default WorkoutLibrary;
