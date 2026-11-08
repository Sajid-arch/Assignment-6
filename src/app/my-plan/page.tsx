import React from 'react';
import PlanInfo from '../components/myplanpage/PlanInfo';
import SaveInfo from '../components/myplanpage/SaveInfo';
import PlanList from '../components/myplanpage/PlanList';
import SaveList from '../components/myplanpage/SaveList';
import ListToggleButton from '../components/myplanpage/ListToggleButton';

const MyPlan = () => {
    

    return (
        <div className='min-h-screen'>
          <div className="container mx-auto mt-6 px-4 pb-8 sm:mt-10 sm:px-5 md:px-10 lg:px-14">
        <div>
          <h2 className="font-bold font-heading text-white text-3xl mb-2 uppercase">My Plan</h2>
          <p className="text-[#8A92A0] text-sm">Cap of five lifts for today. Finish them, then load more.</p>
          <PlanInfo></PlanInfo>
          <SaveInfo></SaveInfo>
        </div>

<div className="bg-transparent">
      <ListToggleButton></ListToggleButton>
      <PlanList></PlanList>
      <SaveList></SaveList>


</div>
        </div>
        </div>
    );
};

export default MyPlan;






    


