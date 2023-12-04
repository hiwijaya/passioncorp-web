import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => {
  return (
    <footer className="absolute bottom-0 inline-flex justify-center w-full bg-primary  h-72">
      <div className="w-full max-w-7xl my-10 text-white">
        <a href="/">
          <div className="flex flex-row items-center">
            <StaticImage className="w-16 mr-1" src="../images/logo-white.png" alt="logo" />
            Passion Corp Indonesia
          </div>
        </a>
      </div>
    </footer>
  )
}
export default Footer