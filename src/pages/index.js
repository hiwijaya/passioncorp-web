import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"
import Slider from "../components/slider"

const IndexPage = () => {
  return (
    <main className="bg-white">
      <Navigation/>
      <Slider/>


      
      <div className="inline-flex justify-center w-full">
        <div className="w-full max-w-7xl my-20">
          <div className="relative mb-20">
            <div className="absolute bottom-0 left-5 bg-sky-300 w-24 h-3"></div>
            <h2 className="relative text-4xl font-bold">About Us</h2>
          </div>
          <div className="flex flex-row">
            <div className="flex-1">
              <div className="font-bold text-xl mb-2">Go Passion Go World!</div>
              <p className="w-full max-w-xl mb-5">
                We are a creative event consultant company. 
                Established in 2013, we have become a leader in Creative with a strong commitment 
                to core values of the company. We provide high-quality services that creative problems. 
                Passion Corp Indonesia (Event Organizer) team is ready to provide activity concepts according 
                to client needs and open discussions to exchange ideas and concepts for activities that will be held later. 
                Quite a lot of companies and organizations have trusted their Gatherings, Launchings, Virtual Events, Webinars. 
                Passion helps you stay focused on your goals. It's easier to maintain discipline and dedication when you have 
                a strong emotional connection to what you're.
              </p>
              <a href="/about" className="text-primary font-bold">More about us..</a>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <StaticImage className="shadow-2xl shadow-sky-400 rounded-3xl w-[450px] rotate-12 hover:rotate-6 hover:scale-110 transition duration-150 cursor-pointer" 
                src="../images/team-1.jpg" alt="team"/>
            </div>
          </div>
        </div>
      </div>



      <div className="inline-flex justify-center w-full bg-slate-100">
        <div className="w-full max-w-7xl my-20">
          <div className="relative mb-10">
            <div className="absolute bottom-0 left-5 bg-sky-300 w-60 h-3"></div>
            <h2 className="relative text-4xl font-bold">Passion at a glance</h2>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <p className="w-full max-w-md">
                With more than 1000 creative workers that we call The Passioners all over Indonesia, 
                we keep on innovating for better service, programs, and ways of working to create more goodness to the society.
              </p>
            </div>
            <div className="inline-flex gap-10">
              <div className="flex flex-col justify-center items-center">
                <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                  <StaticImage className="w-14" src="../images/icon-event.png" alt="event"/>
                </div>
                <div className="font-bold text-3xl">500+</div>
                <div>Events</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                  <StaticImage className="w-14" src="../images/icon-city.png" alt="city"/>
                </div>
                <div className="font-bold text-3xl">20</div>
                <div>Cities</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                  <StaticImage className="w-14" src="../images/icon-partner.png" alt="partner"/>
                </div>
                <div className="font-bold text-3xl">300+</div>
                <div>Partners</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                  <StaticImage className="w-14" src="../images/icon-service.png" alt="service"/>
                </div>
                <div className="font-bold text-3xl">30+</div>
                <div>Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default IndexPage
export const Head = () => <title>Passion Corp</title>