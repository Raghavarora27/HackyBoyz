import React from "react";
import Image from "next/image";
import aerobics from "../assets/aerobics.PNG";
import zumba from "../assets/zumba.jpg";
import cardio from "../assets/cardio.jpg";
import weightLifting from "../assets/weightLifting.PNG";
import kickboxing from "../assets/kickboxing.PNG";
import yoga from "../assets/yogaa.jpg";
import Link from "next/link";

export default function WorkoutCards() {
  return (
    <div className="flex flex-wrap justify-evenly mt-6 mb-3">
      <div
        className="max-w-sm bg-white rounded-sm shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-3 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <Link href="/Sub">
          <Image src={aerobics} />
        </Link>

        <Link href="/Sub">
          <div className="px-5 pb-5">Aerobics </div>
        </Link>
      </div>
      <div
        className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <Link href="/Sub">
          <Image src={zumba} />
        </Link>
        <div className="px-5 pb-5">
          <Link href="/Sub">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Zumba
            </h5>
          </Link>
        </div>
      </div>

      <div
        className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <Link href="/Sub">
          <Image src={cardio} />
        </Link>
        <div className="px-5 pb-5">
        <Link href="/Sub">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Cardio
            </h5>
          </Link>
        </div>
      </div>

      <div
        className="max-w-sm bg-white rounded-lg cards shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50"
        style={{ borderRadius: "10%" }}
      >
        <Link href="/Sub">
          <Image src={weightLifting} />
        </Link>
        <div className="px-5 pb-5">
        <Link href="/Sub">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              WeightLifting
            </h5>
          </Link>
        </div>
      </div>

      <div
        className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <Link href="/Sub">
          <Image src={kickboxing} />
        </Link>
        <div className="px-5 pb-5">
        <Link href="/Sub">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Kickboxing
            </h5>
          </Link>
        </div>
      </div>
      <div
        className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50 cards"
        style={{ borderRadius: "10%" }}
      >
        <Link href="/Sub">
          <Image src={yoga} />
        </Link>
        <div className="px-5 pb-5">
        <Link href="/Sub">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Yoga
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
