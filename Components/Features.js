import React from "react";
import about from "../assets/about.jpg";
import Image from "next/image";

const Features = () => {
  return (
    <div
      class="p-10 min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#1F2937"}}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          display: "flex",
          height: "50vh",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "3%",
          opacity: "0.8",
        }}
      >
        <div
          class="w-full max-w-lg h-64 rounded-lg shadow-2xl overflow-hidden relative"
          style={{ width: "70%" }}
        >
          <img
            class="absolute inset-0 h-full w-full object-cover border-4"
            src="https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <div class="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div class="flex h-full items-center justify-center relative">
            <h1 class="text-3xl text-teal-100 tracking-wider">
              Your adventure starts today.
            </h1>
          </div>
        </div>
        <div
          class="h-full max-w-xl rounded-lg shadow-2xl overflow-hidden relative"
          style={{
            marginLeft: "2rem",
            backgroundColor: "white",
            color: "black",
            width: "40rem",
            height: "34vh",
            textAlign: "left",
            padding: "1.5rem",
          }}
        >
          Here at FitPlus we provide quality content valuing your mind and
          body.Each frame in the FitPlus portal is filled with valuable
          information specially catered for the wellness of it's users.
          <br />
          <br />
          So join us in our venture to fight against the odds of health and
          fitness.
          <br />
          <br />
          <p
            className="text-black text-bold text-xl mx-20"
            style={{ textAlign: "center" }}
          >
            We Are Us! We Are FitPlus!!
          </p>
          <button
            className="bg-black hover:bg-grey hover:text-blue-400 text-white border border-solid border-grey w-1 lg:w-full py-2 border-4"
            style={{ borderRadius: "5%", marginTop: "0.5rem" }}
          >
            Visit now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
