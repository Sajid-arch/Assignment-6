'use client';
import Idata from '@/app/contentType';
import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { Bounce, toast } from 'react-toastify';

const SaveExercise = ({planData}:{planData: Idata}) => {
    const{saveExercise , setSaveExercise} = useContext(ExerciseContext) as {
        saveExercise: Idata[];
        setSaveExercise: React.Dispatch<React.SetStateAction<Idata[]>>;
    };
    const isAdded = saveExercise.some(exercise => exercise.name === planData.name);
    const handleSaveAdd = () => {
        setSaveExercise([...saveExercise, planData]);
        toast.success(`${planData.name} added to save list`, {
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
        <button disabled={isAdded} onClick={() => handleSaveAdd()} className="flex flex-row justify-around gap-1 items-center bg-transparent border-2 border-[#374151] text-[#E5E7EB] font-semibold text-[14px] px-6 py-3 rounded-xl mt-6 hover:bg-[#CCFF00] hover:border-[#CCFF00] hover:text-[#0F1115]  active:scale-95  transition-all duration-300 cursor-pointer"><MdOutlineBookmarkAdded />{isAdded ? 'Saved': 'Save for later'}</button>
    );
};

export default SaveExercise;



