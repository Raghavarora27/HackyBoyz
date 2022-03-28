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
    <div class="lg:container lg:mx-auto flex flex-wrap justify-around items-center">
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg mb-5 mt-5 bg-white text-black cards"
        style={{ borderRadius: "5%", height: "59vh", backgroundColor: "black" }}
      >
        <Image src={train} />

        <div
          class="px-6 py-4"
          style={{ backgroundColor: "black", marginBottom: "0.5rem" }}
        >
          <div
            class="font-bold text-xl mb-2 text-black"
            style={{ color: "white", fontSize: "2rem", marginBottom: "1rem" }}
          >
            Fitness Tracker
          </div>
          <p class="text-white text-base">
            In this Section, you can track / Calculate your "BMI",
            "Fat-Percentage", "Ideal-Weight", "Daily Calories Requirement" and
            some macro-nutrients.
          </p>
        </div>
      </div>
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg bg-white cards"
        style={{ borderRadius: "5%", height: "59vh", backgroundColor: "black" }}
      >
        <Image src={boxer} />
        <div class="px-6 py-4">
          <div
            class="font-bold text-xl mb-2 text-white"
            style={{ color: "white", fontSize: "2rem", marginBottom: "1rem" }}
          >
            Work-Out Plans
          </div>
          <p class="text-white text-base">
            In this Section, We have different types of workout/exercises like
            Aerobics, Yoga, Zumba, weight-lifting, kick-boxing and many more which can
            keep you healthy and fit.
          </p>
        </div>
      </div>
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg bg-white cards"
        style={{ borderRadius: "5%", height: "59vh", backgroundColor: "black" }}
      >
        <Image src={yogaa} />

        <div class="px-6 py-4">
          <div
            class="font-bold text-xl mb-2 text-white"
            style={{ fontSize: "1.7rem", marginBottom: "1rem" }}
          >
            Health and Fitness Blogs
          </div>
          <p class="text-white text-base">
            This section encompasses several blog pages covering topics like
            mental well-being, eating habits, sleep cycle, etc.
          </p>
        </div>
      </div>
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg mb-5 mt-5 bg-white cards"
        style={{ borderRadius: "5%", height: "59vh", backgroundColor: "black" }}
      >
        <Image src={diet} />
        <div class="px-6 py-4">
          <div
            class="font-bold text-xl mb-2 text-white"
            style={{ fontSize: "2rem", marginBottom: "1rem" }}
          >
            Diet Plans
          </div>
          <p class="text-white text-base">
            In this section, we provide various meals recipies as per user
            taste, diet, allergies, and nutrition preference.
          </p>
        </div>
      </div>
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg bg-white cards"
        style={{ borderRadius: "5%", height: "59vh", backgroundColor: "black" }}
      >
        <Image src={tracker} height={1300} />
        <div class="px-6 py-4">
          <div
            class="font-bold text-xl mb-2 text-white"
            style={{ fontSize: "2rem", marginBottom: "1rem" }}
          >
            Set Your Goals
          </div>
          <p class="text-white text-base">
            In this section, user can set their goals as per their requirements according to the mentioned categories.
          </p>
        </div>
      </div>
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg bg-white cards"
        style={{ borderRadius: "5%", height: "59vh", backgroundColor: "black" }}
      >
        <Image src={healthNews} />
        <div class="px-6 py-4">
          <div
            class="font-bold text-xl mb-2 text-white"
            style={{ fontSize: "2rem", marginBottom: "1rem" }}
          >
            Health News
          </div>
          <p class="text-white text-base">
            This section provides the most recent news about health and fitness
            around the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
