'use client';
import Idata from '@/app/contentType';
import React, { createContext, ReactNode, useState } from 'react';
interface IExerciseContext{
    planExercises: Idata[];
    setPlanExercises: React.Dispatch<React.SetStateAction<Idata[]>>;
    saveExercise: Idata[];
    setSaveExercise: React.Dispatch<React.SetStateAction<Idata[]>>;
}

export const ExerciseContext = createContext<IExerciseContext | null>(null);

const ExerciseProvider = ({ children } : {children:ReactNode})  => {
    const [planExercises, setPlanExercises] = useState<Idata[]>([]);
    const [saveExercise, setSaveExercise] = useState<Idata[]>([]);

    const commonData = {
        planExercises,
        setPlanExercises,
        saveExercise,
        setSaveExercise
    };
    return <ExerciseContext.Provider value={commonData}>{children}</ExerciseContext.Provider>;
};

export default ExerciseProvider;