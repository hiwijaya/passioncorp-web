import * as React from "react"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { StaticImage } from "gatsby-plugin-image"

const Slider = () => {
  return(
    <div className="w-full overflow-hidden">
      <Slide canSwipe={false} pauseOnHover={false}>
        <div className="relative w-full max-h-[700px]">
          <StaticImage imgClassName="object-cover w-full max-h-[700px]" src="../images/slider/slider-1.jpg" alt="slide 1"/>
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75">
            <div className="w-full max-w-7xl text-white">
              <div className="font-bold text-5xl text-sky-500 mb-5">EVENT</div>
              <p className="w-full max-w-2xl">
                From impressive, eye-catching stage design, to flawlessly executed breakout sessions, 
                our team is here to help you provide exceptional experiences, no matter the size or scope.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-h-[700px]">
          <StaticImage imgClassName="object-cover w-full max-h-[700px]" src="../images/slider/slider-2.jpg" alt="slide 1"/>
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75">
            <div className="w-full max-w-7xl text-white">
              <div className="font-bold text-5xl text-sky-500 mb-5">PRODUCTION</div>
              <p className="w-full max-w-2xl">
                From concept to set-up to on-site support, we are there every step of the way to provide you
                with the exceptional product and service you deserve.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-h-[700px]">
          <StaticImage imgClassName="object-cover w-full max-h-[700px]" src="../images/slider/slider-3.jpg" alt="slide 1"/>
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75">
            <div className="w-full max-w-7xl text-white">
              <div className="font-bold text-5xl text-sky-500 mb-5">SUPPLIER</div>
              <p className="w-full max-w-2xl">
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