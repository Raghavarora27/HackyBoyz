import React from "react";
import train from "../assets/training.jpg";
import boxer from "../assets/boxer.jpg";
import yogaa from "../assets/yogaa.jpg";
import diet from "../assets/diet.jpg";
import tracker from "../assets/tracker.jpg";
import healthNews from "../assets/healthNews.jpg";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="lg:container lg:mx-auto flex flex-wrap justify-around items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 mt-5 bg-white text-black cards" style={{borderRadius:"5%",height:"59vh",backgroundColor:"black"}}>
        <Image src={train} />

        <div className="px-6 py-4" style={{ backgroundColor: "black",marginBottom:"0.5rem" }}>
          <div
            className="font-bold text-xl mb-2 text-black"
            style={{ color: "white", fontSize: "2rem", marginBottom: "1rem"}}
          >
            Fitness Tracker
          </div>
          <p className="text-white text-base">
            In this Section, you can track / Calculate your BMI, Fat-Percentage, Ideal-Weight, Daily Calories Requirement and some macro-nutrients. 
          </p>
        </div>
        
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white cards" style={{borderRadius:"5%",height:"59vh",backgroundColor:"black"}}>
        <Image src={boxer} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white" style={{ color: "white", fontSize: "2rem", marginBottom: "1rem"}}>Work-Out Plans</div>
          <p className="text-white text-base">
            In this Section, We have different workout Plans / Exercises for Diffent   
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white cards" style={{borderRadius:"5%",height:"59vh",backgroundColor:"black"}}>
        <Image src={yogaa} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white" style={{fontSize: "1.7rem",marginBottom:"1rem"}}>
            Health and Fitness Blogs
          </div>
          <p className="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 mt-5 bg-white cards" style={{borderRadius:"5%",height:"59vh",backgroundColor:"black"}}>
        <Image src={diet} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white" style={{fontSize: "2rem",marginBottom:"1rem"}}>Diet Plans</div>
          <p className="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white cards" style={{borderRadius:"5%",height:"59vh",backgroundColor:"black"}}>
        <Image src={tracker} height={1300}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white" style={{fontSize: "2rem",marginBottom:"1rem"}}>Set Your Goals</div>
          <p className="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white cards" style={{borderRadius:"5%",height:"59vh",backgroundColor:"black"}}>
        <Image src={healthNews} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white" style={{fontSize: "2rem",marginBottom:"1rem"}}>Health News</div>
          <p className="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
