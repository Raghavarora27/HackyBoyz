import React from "react";
import Link from "next/link";
import Header from "../components/Header.js";
import Footer from "../Components/Footer.js";

export default function Signup() {
  return (
    <div><Header />
    <div class="flex items-center min-h-screen ">
      <div class="flex-1 bg-black h-full max-w-4xl mx-auto rounded-lg shadow-xl">
        <div class="flex flex-col md:flex-row">
          <div class="h-32 md:h-auto md:w-1/2">
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=801600x900"
              alt="img"
            />
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-20 h-20 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h1 class="mb-4 text-2xl  font-bold text-center text-white">
                Sign up
              </h1>
              <div>
                <label class="block text-sm">Name</label>
                <input
                  type="text"
                  class="w-full px-4 py-2 text-black text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Name"
                />
              </div>
              <div class="mt-4">
                <label class="block text-sm">Email</label>
                <input
                  type="email"
                  class="w-full px-4 py-2 text-sm border text-black rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label class="block mt-4 text-sm">Password</label>
                <input
                  class="w-full px-4 py-2 text-sm border text-black rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <button
                class="block w-full px-4 py-2 mt-4 text-sm text-black font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                href="#"
              >
                Sign up
              </button>

              <div class="mt-4 text-center">
                <p class="text-sm text-white">
                  Already have an account?
                  <Link href="/Login" class="text-white-600  hover:underline">
                   <span style={{marginLeft: "0.5rem",cursor:"pointer"}}>Login</span> 
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
