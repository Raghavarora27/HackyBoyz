import React from "react";
import dietpage from "../assets/dietpage.png";
import Image from "next/image"

export default function DietPlan() {
  return (
    <div>
      <Image src={dietpage} height={700} width={2000} style={{opacity:"0.8"}} />
    </div>
  );
}
