import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Navigation = () => {

  const [menuVisible, setMenuVisible] = useState(false);


  return (
    <div className="absolute top-0 left-0 z-50 inline-flex justify-center w-full bg-primary lg:bg-transparent">
      <div className="flex flex-col w-full  max-w-7xl mx-4">
        <div className="inline-flex items-center justify-between w-full h-20">
          <a href="/">
            <div className="flex flex-row items-center text-white font-medium">
              <StaticImage className="w-10 lg:w-12 mr-1" src="../images/logo-white.png" alt="logo" />
              Passion Corp. Indonesia
            </div>
          </a>
          <div className="hidden lg:block">
            <nav className="inline-flex text-white gap-10 mr-10">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/pricing">Pricing</a>
              <a href="/contact">Contact</a>
              <a href="/faq">FAQ</a>
            </nav>
            <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6289609399684?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F')}`} target="_blank" className="rounded-xl bg-sky-500 text-white px-6 py-3">Hire Us</a>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => {
              setMenuVisible(prevState => !prevState);
            }}>
              {
                menuVisible ?
                <StaticImage className="w-5 p-2" src="../images/icon-menu-close.png" alt="menu" /> :
                <StaticImage className="w-6 p-2" src="../images/icon-menu.png" alt="menu" />
              }
            </button>
          </div>
        </div>
        <div className={`${menuVisible ? 'block' : 'hidden'} text-white py-5`}>
          <nav className="flex flex-col items-center w-full text-white gap-5 mb-5">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/pricing">Pricing</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQ</a>
            <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6289609399684?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F')}`} target="_blank" className="rounded-xl bg-sky-500 text-white px-10 py-3">Hire Us</a>
          </nav>
        </div>

      </div>

    </div>
  )
}
export default Navigation