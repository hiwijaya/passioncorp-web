import * as React from "react";


const AlertBar = () => {
  return(
    <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 items-center justify-center bg-gray-900 text-white p-4 w-full">
      <div className="text-center">
        Get Cashback If You Deal With Us! <span className="text-sm text-gray-400">*terms & conditions applied</span>
      </div>
      <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6282311000310?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20i%20need%20more%20information%20about%20%E2%80%9Cget%20cashback%E2%80%9D')}`} target="_blank" rel="noreferrer"
          className="rounded-full bg-yellow-400 text-black px-5 py-2 text-sm font-bold">Get the Deal Now!</a>
    </div>
  );

}
export default AlertBar;