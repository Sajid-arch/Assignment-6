import Idata from '@/app/contentType';
import Image from 'next/image';
import React from 'react';
interface IWorkOutDetails{
    params : Promise<{
        id: string;
        
    }>
}


const WorkOutDetails = async ({params}: IWorkOutDetails) => {
    const { id } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const data:Idata = await res.json()

    return (
        <div className='container mx-auto grid min-h-screen grid-cols-1  px-4 py-12 md:grid-cols-2'>
            <div className="relative w-full max-w-150 aspect-4/5 overflow-hidden rounded-lg">
                <Image
                    src={data.image.slice(0,-6)}
                    alt={data.name}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                ></Image>
            </div>
            <div className="flex flex-col space-y-4 items-start justify-start">
                <h1 className="text-4xl font-bold font-heading uppercase text-white">{data.name}</h1>
                <p className="text-[16px] text-[#9CA3AF]">{data.description}</p>
                <div className="flex flex-row justify-start items-center gap-2 mb-10">
      {
        data.muscleGroups.map(muscleGroup => {
          return(
            <div key={muscleGroup} className="badge bg-[#C2F800] rounded-full text-black font-bold text-[11px]">{muscleGroup}</div>
          )
        })
      }
    </div>
    
    <div className="w-full flex flex-col justify-start items-center rounded-2xl bg-[#151922] border-2 border-[#232834]">
        <div className="flex flex-row justify-between items-center w-full px-6 py-3.5 border-b-2 border-[#232834]">
            <h4 className="font-bold text-xs text-[#9CA3AF] uppercase tracking-wider">Equipment</h4>
            <h4 className="font-medium text-sm text-[#E5E7EB]">{data.equipment}</h4>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-6 py-3.5 border-b-2 border-[#232834]">
            <h4 className="font-bold text-xs text-[#9CA3AF] uppercase tracking-wider">Difficulty</h4>
            <h4 className="font-medium text-sm text-[#E5E7EB]">{data.difficulty}</h4>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-6 py-3.5 border-b-2 border-[#232834]">
            <h4 className="font-bold text-xs text-[#9CA3AF] uppercase tracking-wider">Sets</h4>
            <h4 className="font-medium text-sm text-[#E5E7EB]">{data.sets}</h4>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-6 py-3.5 border-b-2 border-[#232834]">
            <h4 className="font-bold text-xs text-[#9CA3AF] uppercase tracking-wider">Reps</h4>
            <h4 className="font-medium text-sm text-[#E5E7EB]">{data.reps}</h4>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-6 py-3.5 border-b-2 border-[#232834]">
            <h4 className="font-bold text-xs text-[#9CA3AF] uppercase tracking-wider">Duration</h4>
            <h4 className="font-medium text-sm text-[#E5E7EB]">{data.duration} min</h4>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-6 py-3.5 border-b-2 border-[#232834]">
            <h4 className="font-bold text-xs text-[#9CA3AF] uppercase tracking-wider">Calories</h4>
            <h4 className="font-medium text-sm text-[#E5E7EB]">{data.caloriesBurned} kcal</h4>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-6 py-3.5">
            <h4 className="font-bold text-xs text-[#9CA3AF] uppercase tracking-wider">Rating</h4>
            <h4 className="font-medium text-sm text-[#E5E7EB]">{data.rating}</h4>
        </div>
    </div>
    <h2 className="text-[16px] font-extrabold text-white uppercase mt-6 mb-4">Instructions</h2>
    <ol className="list-decimal list-inside space-y-4 marker:text-[#9CA3AF]">
    {
    data.instructions.map((instruction, ind) =>{
        return(
            <li key={ind} className="text-[#D1D5DB] text-[14px]">{instruction}</li>
        )
    })
    }

    </ol>
            </div>
        </div>
    );
};

export default WorkOutDetails;