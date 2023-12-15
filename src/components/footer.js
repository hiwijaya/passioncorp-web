import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => {
  return (
    <footer className="absolute bottom-0 h-[350px]">
      <StaticImage className="w-full" src="../images/background-wave.png" alt="wave" />
      <div className="flex justify-center w-full bg-footer h-full">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-3 gap-10 mb-10">

            <div className="col-span-2">
              <div className="flex flex-row items-center font-medium mb-5">
                <StaticImage className="w-16 mr-2" src="../images/logo-color.png" alt="logo" />
                Passion Corp. Indonesia
              </div>
              <div>
                <div className="text-sm mb-2">
                  18 Parc Place, SCBD Tower B Lantai 2, <br />
                  JL Jend Sudirman Kav.52-53, Jakarta Selatan, 12190
                </div>
                <div>
                  <div className="flex flex-row items-center text-sm  mb-1">
                    <StaticImage className="w-4 mr-1" src="../images/icon-email-black.png" alt="email" />
                    sales@passioncorp.id
                  </div>
                  <div className="flex flex-row items-center text-sm">
                    <StaticImage className="w-4 mr-1" src="../images/icon-phone-black.png" alt="phone" />
                    0896-0939-9684
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm mt-6">
              <div className="font-medium mb-2">Are you a vendor?</div>
              <button className="rounded-xl bg-sky-500 text-white px-8 py-4 font-medium mb-10">Partnership</button>
              <div className="flex flex-row items-center">
                <div className="font-medium mr-3">Stay connect</div>
                <div className="inline-flex gap-4">
                  <a href="https://www.instagram.com/passioncorp.id/">
                    <StaticImage className="w-8" src="../images/icon-instagram.png" alt="email" />
                  </a>
                  <a href="https://www.instagram.com/passioncorp.id/">
                    <StaticImage className="w-8" src="../images/icon-youtube.png" alt="email" />
                  </a>
                  <a href="https://www.instagram.com/passioncorp.id/">
                    <StaticImage className="w-8" src="../images/icon-tiktok.png" alt="email" />
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="flex flex-row text-sm text-gray-500">
            <div className="mr-10">© 2023 Passion Corp. Indonesia</div>
            <div className="inline-flex space-x-5">
              <a className="hover:text-sky-500" href="/">Services</a>
              <a className="hover:text-sky-500" href="/">Portfolio</a>
              <a className="hover:text-sky-500" href="/">About</a>
              <a className="hover:text-sky-500" href="/">Contact</a>
              <a className="hover:text-sky-500" href="/">FAQ</a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer