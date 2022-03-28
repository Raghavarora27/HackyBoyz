import React from "react";
import about from "../assets/about.jpg";
import Image from "next/image";

const Features = () => {
  return (
    // <div style={{height:"40vh",marginTop:"2rem"}}>
    //     <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto"  style={{height:"30vh",borderRadius:"10%"}}>
    //       <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative" style={{borderTopLeftRadius:"5%",borderBottomLeftRadius:"5%"}}>
    //         <Image src={about} style={{borderRadius:"5%"}}/>
    //         <div className="absolute text-xl">
    //           <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
    //         </div>
    //       </div>

    //       <div className="bg-white text-black w-full md:w-2/3" style={{borderBottomRightRadius:"5%",borderTopRightRadius:"5%"}}>
    //         <div className="h-full mx-auto text-black px-6 md:px-0 md:pt-6 md:-ml-6 relative">

    //             <div className="w-full lg:w-3/5 lg:px-3">
    //               <p style={{fontSize:"1.2rem"}} className="text-md italic mx-20 text-weight-200 text-black font-bold w-full  mt-4 lg:mt-0 text-justify md:text-left text-sm">
    //                 Here at FitPlus we provide quality content valuing your mind
    //                 and body.Each frame in the FitPlus portal is filled with
    //                 valuable information specially catered for the wellness of
    //                 it's users.So join us in our venture to fight against the
    //                 odds of health and fitness
    //               </p>
    //               <p className="text-black text-bold text-xl mx-20">
    //                 We Are Us! We Are FitPlus!!
    //               </p>
    //             </div>

    //             <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left mx-20">
    //               <button className="bg-black hover:bg-grey hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
    //                 Visit now
    //               </button>
    //             </div>
    //           </div>
    //         {/* </div> */}
    //       </div>
    //     {/* </div> */}
    //   </div>
    // </div>

    <div
      class="p-10 min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#1F2937"}}
    >
      <div class="w-full max-w-lg h-64 rounded-lg shadow-2xl overflow-hidden relative" style={{width:"70%"}}>
        <img
          class="absolute inset-0 h-full w-full object-cover"
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
      <div>
        Here at FitPlus we provide quality content valuing your mind and
        body.Each frame in the FitPlus portal is filled with valuable
        information specially catered for the wellness of it's users.So join us
        in our venture to fight against the odds of health and fitness
      </div>
    </div>
  );
};

export default Features;
