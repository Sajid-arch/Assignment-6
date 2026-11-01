import React from 'react';
import Idata from '../contentType';
import Image from 'next/image';
import { GoClock,  } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Link from 'next/link';





const WorkoutCard = ({ workoutData }: { workoutData: Idata }) => {

    
    return (
      <Link href={`/workout/${workoutData.id}`} className="block">
<div className="card bg-[#15171D] border-2 border-[#222630] rounded-2xl shadow-sm">
  <figure className="relative w-full h-auto aspect-video">
    <Image
      src={workoutData.image.slice(0, -6)}
      alt={workoutData.name}
      fill
      className="object-cover rounded-t-lg"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </figure>
  <div className="card-body">
    <div className="flex flex-row justify-start items-center gap-2">
      {
        workoutData.muscleGroups.map(muscleGroup => {
          return(
            <div key={muscleGroup} className="badge bg-[#C2F800] rounded-full text-black font-bold text-[11px]">{muscleGroup}</div>
          )
        })
      }
    </div>
    <h2 className="card-title font-heading font-bold text-lg text-white tracking-wide">
      {workoutData.name}
    </h2>
    <p className='text-[#9CA3AF] text-xs'>{workoutData.equipment}</p>
    <div className="divider m-0"></div>
    <div className="flex justify-start items-center gap-4">
      <div className="flex items-center gap-2">
        <GoClock />
        <span className="text-[#9CA3AF] text-sm">{workoutData.duration} min</span>
      </div>
      <div className="flex items-center gap-2">
        <FaFire />
        <span className="text-[#9CA3AF] text-sm">{workoutData.caloriesBurned} kcal</span>
      </div>
      <div className="flex items-center gap-2">
        <CiStar />
        <span className="text-[#9CA3AF] text-sm">{workoutData.rating}</span>
      </div>
    </div>
  </div>
</div>
      </Link>



    )
};

export default WorkoutCard;