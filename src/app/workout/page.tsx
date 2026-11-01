import React from 'react';
import WorkoutCard from '../components/WorkoutCard';
import Idata from '../contentType';

const Workout = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return (
        <section id="workout">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl text-white font-bold font-heading">The Library</h2>
                <p className="text-[#9CA3AF] text-[14px]">Twelve lifts covering every major muscle group.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {
                        data.map((item:Idata)=>{
                            return(
                                <WorkoutCard key={item.id} workoutData={item}></WorkoutCard>
                            )
                        })
                    }
                    

                </div>
            </div>
        </section>
    );
};

export default Workout;