import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Navigation = () => {
  return (
    <div className="absolute top-0 left-0 z-10 inline-flex justify-center w-full h-20">
        <div className="inline-flex items-center justify-between w-full max-w-7xl">
          <a href="/">
            <div className="flex flex-row items-center text-white">
              <StaticImage className="w-16 mr-1" src="../images/logo-white.png" alt="logo"/>
              Passion Corp Indonesia
            </div>
          </a>
          <div>
            <nav className="inline-flex text-white gap-10 mr-10">
              <a href="/">Services</a>
              <a href="/">Pricing</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </nav>
            <button className="rounded-xl bg-sky-500 text-white px-6 py-3">Hire Us</button>
          </div>
        </div>
    </div>
  )
}
export default Navigation