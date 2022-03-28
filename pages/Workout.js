import React from 'react';
import Header from "../components/Header.js";
import Footer from "../Components/Footer.js";
import WorkoutBanner  from '../Components/Workoutbanner.js';
import WorkoutCards from '../Components/WorkoutCards.js';


export default  function Workout (){
  return (
    <div>
    <Header />
    <WorkoutBanner />
    <div className='flex flex-wrap items-center justify-evenly'>
    <WorkoutCards className="mt-3 mb-3"/>
    <WorkoutCards  className="mt-3 mb-3"/>
    <WorkoutCards  className="mt-3 mb-3"/>
    <WorkoutCards  className="mt-6 mb-3"/>
    <WorkoutCards  className="mt-3 mb-3"/>
    <WorkoutCards  className="mt-3 mb-3"/>
    <WorkoutCards  className="mt-3 mb-3"/>
    <WorkoutCards  className="mt-3 mb-3" /></div>
    <Footer />
    </div>
  )
}

