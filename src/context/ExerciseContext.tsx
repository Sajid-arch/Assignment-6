'use client';
import Idata from '@/app/contentType';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
interface IExerciseContext{
    planExercises: Idata[];
    setPlanExercises: React.Dispatch<React.SetStateAction<Idata[]>>;
    saveExercise: Idata[];
    setSaveExercise: React.Dispatch<React.SetStateAction<Idata[]>>;
    activeTab: 'plan' | 'saved';
    setActiveTab: React.Dispatch<React.SetStateAction<'plan' | 'saved'>>;
    sortBy: 'Duration' | 'Calories' | 'Rating';
    setSortBy: React.Dispatch<React.SetStateAction<'Duration' | 'Calories' | 'Rating'>>;
}

export const ExerciseContext = createContext<IExerciseContext | null>(null);

const ExerciseProvider = ({ children } : {children:ReactNode})  => {
    const [planExercises, setPlanExercises] = useState<Idata[]>([]);
    
    const [saveExercise, setSaveExercise] = useState<Idata[]>([]);
    const [activeTab, setActiveTab] = useState<'plan' | 'saved'> ('plan');
    const [sortBy, setSortBy] = useState<'Duration' | 'Calories' | 'Rating'>('Duration');


    const commonData = {
        planExercises,
        setPlanExercises,
        saveExercise,
        setSaveExercise,
        activeTab,
        setActiveTab,
        sortBy,
        setSortBy
    };
    return <ExerciseContext.Provider value={commonData}>{children}</ExerciseContext.Provider>;
};

export default ExerciseProvider;