import React from 'react';
import Idata from '../contentType';
import WorkoutCard from '../components/WorkoutCard';
// import WorkoutLibrary from '../components/WorkoutLibrary';

const Workout = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = (await res.json()) as Idata[];

    return (
        <section id="workout">
            <div className="container mx-auto px-5 pb-15">
                <h2 className="text-3xl text-white font-bold font-heading">The Library</h2>
                <p className="text-[#9CA3AF] text-[14px]">Twelve lifts covering every major muscle group.</p>
                {/* <WorkoutLibrary exercises={data as Idata[]} /> */}

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((workout: Idata) => (
                        <WorkoutCard key={workout.id} workoutData={workout} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workout;