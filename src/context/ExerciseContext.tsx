'use client';
import Idata from '@/app/contentType';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
interface IExerciseContext{
    planExercises: Idata[];
    setPlanExercises: React.Dispatch<React.SetStateAction<Idata[]>>;
    sortedPlanExercises: Idata[];
    setSortedPlanExercises: React.Dispatch<React.SetStateAction<Idata[]>>;
    sortedSaveExercise: Idata[];
    setSortedSaveExercise: React.Dispatch<React.SetStateAction<Idata[]>>;
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
    const [sortedPlanExercises, setSortedPlanExercises] = useState<Idata[]>([]);
    const [sortedSaveExercise , setSortedSaveExercise] = useState<Idata[]>([]);    
    const [saveExercise, setSaveExercise] = useState<Idata[]>([]);
    const [activeTab, setActiveTab] = useState<'plan' | 'saved'> ('plan');
    const [sortBy, setSortBy] = useState<'Duration' | 'Calories' | 'Rating'>('Duration');

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const localPlan = localStorage.getItem('planExercises');
        const localSave = localStorage.getItem('saveExercise');

    
        if(localPlan){
            try{
                // eslint-disable-next-line
                setPlanExercises(JSON.parse(localPlan));
            }
            catch(error){
                console.error('Failed to get exercises added to plan list', error);
            }
        }
        if(localSave){
            try{
                setSaveExercise(JSON.parse(localSave));
            }
            catch(error){
                console.error('Failed to get exercises added to saved list',error);
            }
        }
        setIsLoaded(true);
    },[]);

    useEffect(() => {
        if(isLoaded){
            localStorage.setItem('planExercises', JSON.stringify(planExercises));
        }
    },[isLoaded, planExercises]);

    useEffect(() => {
        if(isLoaded){
            localStorage.setItem('saveExercise', JSON.stringify(saveExercise));
        }
    },[isLoaded, saveExercise]);

    const commonData = {
        planExercises,
        setPlanExercises,
        sortedPlanExercises,
        setSortedPlanExercises,
        sortedSaveExercise , 
        setSortedSaveExercise,
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