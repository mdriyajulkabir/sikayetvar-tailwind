import React from 'react';
import SliderNegative from '../SubComponent/SliderNegative';
import SliderPositive from '../SubComponent/SliderPositive';

function Slider() {
    return (
        <div className='mb-24'>
            <h1 className='text-4xl text-gray-400 font-bold pl-20 mb-16'>Complaints on the Agenda</h1>
            <SliderNegative/>
            <SliderPositive/>
        </div>
    );
}

export default Slider;