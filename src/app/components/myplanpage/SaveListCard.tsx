'use client';
import React, { useContext } from 'react';
import { GoClock,  } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { ExerciseContext } from '@/context/ExerciseContext';
import Image from 'next/image';
import Idata from '@/app/contentType';
import Link from 'next/link';

const SaveListCard = () => {
const {saveExercise, activeTab, setSaveExercise} = useContext(ExerciseContext) as {
                    saveExercise: Idata[];
                    activeTab: 'plan' | 'saved'; 
                    setSaveExercise: React.Dispatch<React.SetStateAction<Idata[]>>;          
                };

    const handleRemoveExercise = (exercise:Idata) =>{
              const restExercise = saveExercise.filter(item => item.id !== exercise.id)
              setSaveExercise(restExercise);
            }

    return (
        <div className='w-full'>
            {
                    saveExercise.length > 0 ? saveExercise.map((exercise) => (
                      <div key={exercise.id} className={`${activeTab === 'saved' ? 'block' : 'hidden'} mb-3 grid w-full grid-cols-1 gap-4 rounded-2xl border-2 border-[#232732] bg-[#14171E] p-3 sm:p-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center`}>
                        <div className='flex min-w-0 flex-row items-center justify-start gap-3 sm:gap-4'>
                          <div className='w-20 shrink-0 sm:w-28 md:w-1/4'>
                            <figure className="relative h-auto aspect-video">
                                <Image
                                  src={exercise.image.slice(0, -6)}
                                  alt={exercise.name}
                                  fill
                                  className="object-cover rounded-xl"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 150px, 160px"
                                />
                              </figure>
                          </div>
                          <div className="min-w-0">
                            <h2 className="card-title font-heading font-bold text-[16px] text-white tracking-wide">
                                  {exercise.name}
                                </h2>
                                <p className='text-[#8A92A0] font-semibold text-xs'>{exercise.equipment}</p>
                                <div className="mt-2 flex flex-wrap items-center justify-start gap-x-3 gap-y-2">
                                  <div className="flex items-center gap-1">
                                    <GoClock className='text-[#CCFF00]' />
                                    <span className="text-[#D1D5DB] text-xs font-normal">{exercise.duration} min</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <FaFire className='text-[#CCFF00]' />
                                    <span className="text-[#D1D5DB] text-xs font-normal">{exercise.caloriesBurned} kcal</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <CiStar className='text-[#CCFF00]' />
                                    <span className="text-[#D1D5DB] text-xs font-normal">{exercise.rating}</span>
                                  </div>
                                </div>
                          </div>
                        </div>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-2 md:justify-end'>
                          <div className='flex w-full flex-row flex-wrap items-center justify-start gap-2 md:w-auto md:justify-center'>
                            <Link href={`/workout/${exercise.id}`} className='cursor-pointer'>
                              <button className='flex cursor-pointer flex-row items-center justify-center gap-1 rounded-full border-2 border-[#374151] px-3 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#2B303D] sm:px-4'>View Details</button>
                            </Link>
                            <button aria-label={`Remove ${exercise.name} from saved exercises`} onClick ={() => handleRemoveExercise(exercise)}><RxCrossCircled /></button>
                          </div>
                        </div>
                      </div>
                    )) : saveExercise.length > 0 && activeTab === 'saved'? (
                      <p className="py-6 text-center text-sm text-[#9CA3AF]" role="status">No saved exercises match your search.</p>
                    ) : null
                  }
        </div>
    );
};

export default SaveListCard;




            
