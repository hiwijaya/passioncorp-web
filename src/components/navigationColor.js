import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

const NavigationColor = () => {

  const [menuVisible, setMenuVisible] = useState(false);


  return (
    <div className="inline-flex justify-center w-full bg-primary lg:bg-transparent">
      <div className="flex flex-col w-full  max-w-7xl mx-4">
        <div className="inline-flex items-center justify-between w-full h-20">
          <a href="/">
            <div className="flex flex-row items-center text-white lg:text-primary font-medium">
              <StaticImage className="hidden lg:block w-10 lg:w-12 mr-1" src="../images/logo-color.png" alt="logo" />
              <StaticImage className="block lg:hidden w-10 lg:w-12 mr-1" src="../images/logo-white.png" alt="logo" />
              Passion Corp. Indonesia
            </div>
          </a>
          <div className="hidden lg:block">
            <nav className="inline-flex text-white lg:text-black  gap-10 mr-10">
              <a href="/services">Services</a>
              <a href="/">Portfolio</a>
              <a href="/about">About</a>
              <a href="/">Contact</a>
              <a href="/news">News</a>
              <a href="/">FAQ</a>
            </nav>
            <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6282311000310?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F')}`} target="_blank" className="rounded-xl bg-sky-500 text-white px-6 py-3">Hire Us</a>
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
            <a href="/services">Services</a>
            <a href="/">Portfolio</a>
            <a href="/about">About</a>
            <a href="/">Contact</a>
            <a href="/news">News</a>
            <a href="/">FAQ</a>
            <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6282311000310?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F')}`} target="_blank" className="rounded-xl bg-sky-500 text-white px-6 py-3">Hire Us</a>
          </nav>
        </div>

      </div>

    </div>
  )
}
export default NavigationColor