import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import WorkoutBanner from "../Components/Workoutbanner.js";
import WorkoutCards from "../Components/WorkoutCards.js";


// let i = 0;
// const raghav = [
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=zueyEdRZQlk",
//   "https://www.youtube.com/watch?v=WPdJaBFquNc",
//   "https://www.youtube.com/watch?v=WPdJaBFquNc",
//   "https://www.youtube.com/watch?v=WPdJaBFquNc",
//   "https://www.youtube.com/watch?v=WPdJaBFquNc",
//   "https://www.youtube.com/watch?v=WPdJaBFquNc",
//   "https://www.youtube.com/watch?v=WPdJaBFquNc",
// ];


export default function Workout({ works }) {
  // let [category, setcategory] = useState("warmup");
  // let limit;


  // var hasValueLessThanTen = false;
  // limit = category === "cooldown" ? 503 : 12;
  // if(category === "workout"){
  //   limit = 164;
  // }
  // console.log(limit);
  
  // function handleworkout(ele){
  //   setcategory(ele);
  // }

  
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
