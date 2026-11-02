import React from 'react';

const MyPlan = () => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-box">
                <a role="tab" className="tab">Today&apos;s Plan</a>
                <a role="tab" className="tab tab-active">Saved</a>
            </div>
        </div>
    );
};

export default MyPlan;