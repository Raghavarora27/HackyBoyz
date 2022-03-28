import React from 'react';
import Header from "../components/Header.js";
import Footer from "../Components/Footer.js";
import HealthwellnessBlogs from '../Components/HealthwellnessBlogs.js';
import WorkoutBanner from '../Components/Workoutbanner.js';

const Health = () => {
  return (
    <div>
    <Header />
    <WorkoutBanner />
    <div style={{display : "flex", flexDirection:"row"}}>
    <HealthwellnessBlogs className = "mb-6"/>
   </div>
    <Footer />
    </div>
  )
}

export default Health