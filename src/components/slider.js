import * as React from "react"
import { useState } from "react"
import { Fade } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { StaticImage } from "gatsby-plugin-image"

const Slider = () => {

  const [showPlayer, setShowPlayer] = useState(false)

  const introButton = () => (
    <div className="flex flex-col lg:flex-row items-center mt-10 space-x-0 space-y-5 lg:space-x-10 lg:space-y-0">
      <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6289609399684?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F')}`} target="_blank" 
        className="flex items-center rounded-xl bg-sky-500 text-white px-6 h-12 lg:h-14 self-center">FREE EVENT CONSULTATION</a>
      <div className="flex flex-row items-center text-white" role="button"
        onClick={() => setShowPlayer(prevState => !prevState)}>
        <div className="border-2 animate-pulse border-sky-500 w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center rounded-full shadow-xl cursor-pointer mr-2" role="button"
          onClick={() => {}}>
          <StaticImage className="w-5" src="../images/icon-play.png" alt="play" />
        </div>
        WATCH INTRO
      </div>
    </div>
  );

  const player = () => (
    <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="flex flex-col w-full max-w-[900px] h-full max-h-[600px] bg-white p-5 rounded-xl">
        <div className="flex flex-row items-center justify-between mb-5">
          <div className="font-bold">{'China (Fujian ) - Indonesia - Signing'}</div>
          <div className="p-3 bg-slate-200 rounded-full cursor-pointer" role="button" 
            onClick={() => setShowPlayer(prevState => !prevState)}>
            <StaticImage className="w-6" src="../images/icon-close-big.png" alt="close"/>
          </div>
        </div>
        { 
          <iframe className="h-full" src={'https://www.youtube.com/embed/G5PGI_Y-KN4'} referrerpolicy="no-referrer-when-downgrade"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        }
      </div>
    </div>
  )

  return(
    <div className="w-full overflow-hidden">
      {showPlayer && player()}
      <Fade canSwipe={false} pauseOnHover={false} arrows={false}>
        <div className="relative w-full h-screen lg:h-[700px]">
          <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/slider/slider-1.jpg" alt="slide 1"/>
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <div className="font-bold text-2xl lg:text-5xl text-sky-500 mb-5 text-center lg:text-left">EVENT</div>
              <p className="w-full lg:max-w-2xl text-center lg:text-left">
                From impressive, eye-catching stage design, to flawlessly executed breakout sessions, 
                our team is here to help you provide exceptional experiences, no matter the size or scope.
              </p>
              {introButton()}
            </div>
          </div>
        </div>
        <div className="relative w-full h-screen lg:h-[700px]">
          <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/slider/slider-2.jpg" alt="slide 2"/>
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <div className="font-bold text-2xl lg:text-5xl text-sky-500 mb-5 text-center lg:text-left">PRODUCTION</div>
              <p className="w-full lg:max-w-2xl text-center lg:text-left">
                From concept to set-up to on-site support, we are there every step of the way to provide you
                with the exceptional product and service you deserve.
              </p>
              {introButton()}
            </div>
          </div>
        </div>
        <div className="relative w-full h-screen lg:h-[700px]">
          <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/slider/slider-3.jpg" alt="slide 3"/>
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <div className="font-bold text-2xl lg:text-5xl text-sky-500 mb-5 text-center lg:text-left">SUPPLIER</div>
              <p className="w-full lg:max-w-2xl text-center lg:text-left">
                We understand how to get audience's attention using the right tools, we're committed to customizing the experience to exceed all expectations.
              </p>
              {introButton()}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
export default Slider