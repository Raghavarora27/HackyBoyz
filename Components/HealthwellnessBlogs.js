import React from 'react'
import Image from "next/image";
import spirituality from "../assets/spirituality.png";
import mental from "../assets/mental.jpeg";
import cardio from "../assets/cardio.jpg";
import weightLifting from "../assets/weightLifting.PNG";
import kickboxing from "../assets/kickboxing.PNG";
import yoga from "../assets/yogaa.jpg";

const HealthwellnessBlogs = () => {
  return (
    <div className="flex flex-wrap justify-evenly mt-6 mb-3" >
      <div className="max-w-sm bg-white rounded-sm shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-3 shadow-blue-500/50" style={{borderRadius:"10%"}}>
        <a href="#">
          <Image src={yoga} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Yoga
            </h5>
          </a>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50" style={{borderRadius:"10%"}}>
        <a href="#">
          <Image src={spirituality} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Spirituality
            </h5>
          </a>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50" style={{borderRadius:"10%"}}>
        <a href="#">
          <Image src={mental} width={200} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Mental Health
            </h5>
          </a>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50" style={{borderRadius:"10%"}}>
        <a href="#">
          <Image src={weightLifting} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Sleep Cycle
            </h5>
          </a>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50" style={{borderRadius:"10%"}}>
        <a href="#">
          <Image src={kickboxing} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Depression
            </h5>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50" style={{borderRadius:"10%"}}>
      <a href="#">
        <Image src={yoga} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Nature & Life
          </h5>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50" style={{borderRadius:"10%"}}>
      <a href="#">
        <Image src={yoga} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            The Tree Of Life
          </h5>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6 shadow-blue-500/50" style={{borderRadius:"10%"}}>
      <a href="#">
        <Image src={yoga} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Power Of Viberation
          </h5>
        </a>
      </div>
    </div>
    </div>
  )
}

export default HealthwellnessBlogs