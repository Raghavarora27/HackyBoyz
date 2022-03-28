import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://fitness.sebhulse.com/data/bodyweight-exercises.json"
  );
  const data = await res.json();

  return {
    props: { works: data.warmup },
  };
};

let limit = 15;
let i = 0;
let hasValueLessThanTen = false;

const Sub = ({ works }) => {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-around">
        {works.map((work) => {
          if (i > limit) {
            hasValueLessThanTen = true;
          }
          {
            i++;
          }
          return (
            <div key={work}>
              <div
                className="flex justify-center m-5"
                style={{ display: hasValueLessThanTen ? "none" : "block" }}
              >
                <div
                  className="block p-6 rounded-lg shadow-lg bg-black max-w-sm"
                  style={{ minWidth: "20rem", height: "10rem" }}
                >
                  <h5 className="text-white text-xl leading-tight font-medium mb-2">
                    {work.name}
                  </h5>

                  {/* <Link href={raghav[i]}> */}
                  <button
                    type="button"
                    className=" inline-block px-6 mt-5 py-2.5 bg-violet-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Demo
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Sub;
