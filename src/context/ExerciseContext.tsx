'use client';
import React, { createContext, ReactNode, useState } from 'react';

const ExerciseContext = createContext({});

const ExerciseProvider = ({ children } : {children:ReactNode})  => {
    const [planExercises, setPlanExercises] = useState([]);
    const [saveExercise, setSaveExercise] = useState([]);

    const commonData = {
        planExercises,
        setPlanExercises,
        saveExercise,
        setSaveExercise
    };
    return <ExerciseContext.Provider value={commonData}>{children}</ExerciseContext.Provider>;
};

export default ExerciseProvider;