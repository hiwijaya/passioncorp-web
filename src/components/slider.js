import * as React from "react"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { StaticImage } from "gatsby-plugin-image"

const Slider = () => {
  return(
    <div className="w-full overflow-hidden">
      <Slide canSwipe={false} pauseOnHover={false} arrows={false}>
        <div className="relative w-full h-screen lg:h-[700px]">
          <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/slider/slider-1.jpg" alt="slide 1"/>
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <div className="font-bold text-2xl lg:text-5xl text-sky-500 mb-5 text-center lg:text-left">EVENT</div>
              <p className="w-full lg:max-w-2xl text-center lg:text-left">
                From impressive, eye-catching stage design, to flawlessly executed breakout sessions, 
                our team is here to help you provide exceptional experiences, no matter the size or scope.
              </p>
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
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}
export default Slider