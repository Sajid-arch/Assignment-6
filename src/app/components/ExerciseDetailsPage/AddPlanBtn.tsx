'use client';
import Idata from '@/app/contentType';
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';
import { MdOutlineAddToPhotos } from "react-icons/md";
import { Bounce ,toast } from 'react-toastify';

const AddPlanBtn = ({planData}:{planData: Idata}) => {
    const { planExercises, setPlanExercises } = useContext(ExerciseContext) as {
        planExercises: Idata[];
        setPlanExercises: React.Dispatch<React.SetStateAction<Idata[]>>;
    };
    const isAdded = planExercises.some(exercise => exercise.name === planData.name);
    const isPlanFull = planExercises.length >= 5;
    const handlePlanAdd = () => {
        if (isAdded || isPlanFull) return;
        setPlanExercises([...planExercises,planData]);
        toast.success(`${planData.name} added to today's plan`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
});        
    };
    return (
        <button disabled={isAdded || isPlanFull} onClick={handlePlanAdd} className="flex flex-row justify-around gap-1 items-center bg-[#CCFF00] border-[#CCFF00] text-[#0F1115] font-semibold text-[14px] px-6 py-3 rounded-xl mt-6 hover:bg-transparent border-2 hover:border-[#374151] hover:text-[#E5E7EB] active:scale-95 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"><MdOutlineAddToPhotos />{isAdded ? 'Added to plan' : isPlanFull ? 'Plan is full (5/5)' : "Add to today's plan"}</button>
    );
};

export default AddPlanBtn;