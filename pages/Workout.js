import React from "react";
import Header from "../components/Header.js";
import Footer from "../Components/Footer.js";
import WorkoutBanner from "../Components/Workoutbanner.js";
import WorkoutCards from "../Components/WorkoutCards.js";

export default function Workout() {
  return (
    <div>
      <Header />
      <WorkoutBanner />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <WorkoutCards className="mb-6" />
      </div>
      <Footer />
    </div>
  );
}
