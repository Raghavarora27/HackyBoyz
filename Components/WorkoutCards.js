import React from "react";
import Image from "next/image";
import aerobics from "../assets/aerobics.PNG";
import zumba from "../assets/zumba.jpg";
import cardio from "../assets/cardio.jpg";
import weightLifting from "../assets/weightLifting.PNG";
import kickboxing from "../assets/kickboxing.PNG";
import yoga from "../assets/yogaa.jpg";

export default function WorkoutCards() {
  return (
    <div className="flex flex-wrap justify-evenly mt-6 mb-3">
      <div
        class="max-w-sm bg-white rounded-sm shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-3 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <a href="#">
          <Image src={aerobics} />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Aerobics
            </h5>
          </a>
        </div>
      </div>

      <div
        class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <a href="#">
          <Image src={zumba} />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Zumba
            </h5>
          </a>
        </div>
      </div>

      <div
        class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <a href="#">
          <Image src={cardio} />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Cardio
            </h5>
          </a>
        </div>
      </div>

      <div
        class="max-w-sm bg-white rounded-lg cards shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50"
        style={{ borderRadius: "10%" }}
      >
        <a href="#">
          <Image src={weightLifting} />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              WeightLifting
            </h5>
          </a>
        </div>
      </div>

      <div
        class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <a href="#">
          <Image src={kickboxing} />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Kickboxing
            </h5>
          </a>
        </div>
      </div>
      <div
        class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <a href="#">
          <Image src={yoga} />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Yoga
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}
