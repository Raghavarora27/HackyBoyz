import React from "react";

const NewsLetter = () => {
  return (
  
<footer className=" flex justify-center px-4 text-gray-100 bg-gray-800">
        <div className="container py-6 flex justify-around">
            <h1 className="text-center text-lg font-bold lg:text-2xl ">
                Join 31,000+ other and never miss < br /> out on new tips, tutorials, and more.
            </h1>

            <div className="flex justify-center mt-5">
                <div className="bg-white rounded-lg">
                    <div className="shadow-2xl flex flex-wrap justify-between md:flex-row">
                        <input type="email" className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email" />
                        <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">subscribe</button>
                    </div>
                </div>
            </div>

            <hr className="h-px mt-6 bg-gray-700 border-none" />
        </div>
    </footer>
  );
};

export default NewsLetter;
