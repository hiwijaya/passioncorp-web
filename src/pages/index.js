import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"
import Slider from "../components/slider"
import Footer from "../components/footer"

const IndexPage = () => {

  const aboutUsSection = () => (
    <div className="inline-flex justify-center w-full">
      <div className="w-full max-w-7xl my-20">
        <div className="flex flex-row">
          <div className="flex-1">
            <div className="relative mb-20">
              <div className="absolute bottom-0 left-5 bg-sky-300 w-24 h-3"></div>
              <h2 className="relative text-4xl font-bold">About Us</h2>
            </div>
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
              src="../images/team-1.jpg" alt="team" />
          </div>
        </div>
      </div>
    </div>
  )

  const glanceSection = () => (
    <div className="inline-flex justify-center w-full bg-slate-100">
      <div className="w-full max-w-7xl my-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <div className="relative mb-14">
              <div className="absolute bottom-0 left-5 bg-sky-300 w-72 h-3"></div>
              <h2 className="relative text-4xl font-bold">Passion at a glance</h2>
            </div>
            <p className="w-full max-w-md">
              With more than 1000 creative workers that we call The Passioners all over Indonesia,
              we keep on innovating for better service, programs, and ways of working to create more goodness to the society.
            </p>
          </div>
          <div className="inline-flex gap-10">
            <div className="flex flex-col justify-center items-center">
              <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                <StaticImage className="w-14" src="../images/icon-event.png" alt="event" />
              </div>
              <div className="font-bold text-3xl">500+</div>
              <div>Events</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                <StaticImage className="w-14" src="../images/icon-city.png" alt="city" />
              </div>
              <div className="font-bold text-3xl">20</div>
              <div>Cities</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                <StaticImage className="w-14" src="../images/icon-partner.png" alt="partner" />
              </div>
              <div className="font-bold text-3xl">300+</div>
              <div>Partners</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                <StaticImage className="w-14" src="../images/icon-service.png" alt="service" />
              </div>
              <div className="font-bold text-3xl">30+</div>
              <div>Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


  const serviceSection = () => (
    <div className="inline-flex justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-7xl my-20">
        <div className="w-fit relative mb-10 ">
          <div className="absolute bottom-0 left-5 bg-sky-300 w-44 h-3"></div>
          <h2 className="relative text-4xl font-bold">Our Services</h2>
        </div>
        <p className="mb-10">
          We are ready with the industry's most creative, cutting-edge solutions to help you produce extraordinary live events from start to finish.
        </p>
        <div className="grid grid-cols-3 gap-5">
          <div className="relative w-full h-52 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full  h-52" src="../images/services/thumbnail-event-organizer.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 p-8 w-full h-full bg-black/50">
              <StaticImage className="w-8 mb-2" src="../images/services/icon-event-organizer.png" alt="icon event organizer"/>
              <div className="text-white font-bold text-2xl">Event Organizer</div>
            </div>
          </div>
          <div className="relative w-full h-52 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full  h-52" src="../images/services/thumbnail-show-management.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 p-8 w-full h-full bg-black/50">
              <StaticImage className="w-8 mb-2" src="../images/services/icon-show-management.png" alt="icon show management"/>
              <div className="text-white font-bold text-2xl">Show Management</div>
            </div>
          </div>
          <div className="relative w-full h-52 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full  h-52" src="../images/services/thumbnail-documentation.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 p-8 w-full h-full bg-black/50">
              <StaticImage className="w-8 mb-2" src="../images/services/icon-documentation.png" alt="icon documentation"/>
              <div className="text-white font-bold text-2xl">Documentation</div>
            </div>
          </div>
          <div className="relative w-full h-52 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full  h-52" src="../images/services/thumbnail-3d-design.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 p-8 w-full h-full bg-black/50">
              <StaticImage className="w-8 mb-2" src="../images/services/icon-3d-design.png" alt="icon 3D design"/>
              <div className="text-white font-bold text-2xl">3D Design</div>
            </div>
          </div>
          <div className="relative w-full h-52 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full  h-52" src="../images/services/thumbnail-content.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 p-8 w-full h-full bg-black/50">
              <StaticImage className="w-8 mb-2" src="../images/services/icon-graphic-content.png" alt="icon graphic content"/>
              <div className="text-white font-bold text-2xl">Graphic Content</div>
            </div>
          </div>
          <div className="relative w-full h-52 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full  h-52" src="../images/services/thumbnail-sound.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 p-8 w-full h-full bg-black/50">
              <StaticImage className="w-8 mb-2" src="../images/services/icon-sound-system.png" alt="icon sound system"/>
              <div className="text-white font-bold text-2xl">Sound System</div>
            </div>
          </div>
          <div className="relative w-full h-52 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full  h-52" src="../images/services/thumbnail-travel.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 p-8 w-full h-full bg-black/50">
              <StaticImage className="w-8 mb-2" src="../images/services/icon-tour.png" alt="icon tour and travel"/>
              <div className="text-white font-bold text-2xl">Tour & Travel</div>
            </div>
          </div>
          <div className="relative w-full h-52 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full  h-52" src="../images/services/thumbnail-equipment.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 p-8 w-full h-full bg-black/50">
              <StaticImage className="w-8 mb-2" src="../images/services/icon-equipment.png" alt="icon event equipment"/>
              <div className="text-white font-bold text-2xl">Event Equipment</div>
            </div>
          </div>
          <div className="relative w-full h-52 rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full  h-52" src="../images/services/thumbnail-live-streaming.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 p-8 w-full h-full bg-black/50">
              <StaticImage className="w-8 mb-2" src="../images/services/icon-live.png" alt="icon live streaming"/>
              <div className="text-white font-bold text-2xl">Live Streaming</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <main className="relative min-h-screen bg-white">
      <div className="pb-72">
        <Navigation />
        <Slider />

        {aboutUsSection()}
        {glanceSection()}
        {serviceSection()}
      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>Passion Corp</title>