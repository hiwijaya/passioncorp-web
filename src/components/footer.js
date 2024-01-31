import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => {
  return (
    <footer className="absolute bottom-0 h-[500px] md:h-[350px]">
      <StaticImage className="w-full" src="../images/background-wave.png" alt="wave" />
      <div className="flex justify-center w-full bg-footer h-full">
        <div className="w-full max-w-7xl mx-4">
          <div className="grid grid-rows-1 sm:grid-cols-3 sm:gap-10 mb-10 sm:mb-5">

            <div className="col-span-2">
              <div className="flex flex-row items-center font-medium mb-5">
                <StaticImage className="w-16 mr-2" src="../images/logo-color.png" alt="logo" />
                Passion Corp. Indonesia
              </div>
              <div>
                <div>
                  <div className="flex flex-row items-center text-sm  mb-3">
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
              <a href="https://wa.me/6289609399684?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F" target="_blank" className="inline-block rounded-xl bg-sky-500 text-white px-8 py-4 font-medium mb-5 sm:mb-10">Partnership</a>
              <div className="flex flex-col xl:flex-row items-start xl:items-center">
                <div className="font-medium mr-3 mb-2 xl:mb-0">Stay connect</div>
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
          <div className="flex flex-col-reverse sm:flex-row text-sm text-gray-500">
            <div className="mr-10">© 2023 Passion Corp. Indonesia</div>
            <div className="inline-flex space-x-3 sm:space-x-5 mb-5 sm:mb-0">
              <a href="/about">About</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/pricing">Pricing</a>
              <a href="/contact">Contact</a>
              <a href="/faq">FAQ</a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer