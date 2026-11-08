import React from 'react';
import Idata from '../contentType';
import WorkoutLibrary from '../components/WorkoutLibrary';

const Workout = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return (
        <section id="workout">
            <div className="container mx-auto px-5 pb-15">
                <h2 className="text-3xl text-white font-bold font-heading">The Library</h2>
                <p className="text-[#9CA3AF] text-[14px]">Twelve lifts covering every major muscle group.</p>
                <WorkoutLibrary exercises={data as Idata[]} />
            </div>
        </section>
    );
};

export default Workout;