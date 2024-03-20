import * as React from "react";


const AlertBar = () => {
  return(
    <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 items-center justify-center bg-gray-900 text-white p-4 w-full">
      <div>
        Get Cashback If You Deal With Us! <span className="text-sm text-gray-400">*terms & conditions applied</span>
      </div>
      <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6289609399684?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F')}`} target="_blank" 
          className="rounded-full bg-white text-black px-5 py-2 text-sm">Contact Us</a>
    </div>
  );

}
export default AlertBar;