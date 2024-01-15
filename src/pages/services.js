import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import NavigationColor from "../components/navigationColor";

const ServicesPage = () => {


  const serviceSection = () => (
    <div className="inline-flex justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-7xl mx-4 my-10 sm:my-20">
        <div className="w-fit relative mb-10 ">
          <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-28 sm:w-44 h-3"></div>
          <h2 className="relative text-2xl sm:text-4xl font-bold">Our Services</h2>
        </div>
        <p className="text-center mb-10">
          We are ready with the industry's most creative, cutting-edge solutions to help you produce extraordinary live events from start to finish.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 text-xl lg:text-2xl">
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-event-organizer.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-event-organizer.png" alt="icon event organizer"/>
              <div className="text-white font-bold">Event Organizer</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-show-management.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-show-management.png" alt="icon show management"/>
              <div className="text-white font-bold">Show Management</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-documentation.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-documentation.png" alt="icon documentation"/>
              <div className="text-white font-bold">Documentation</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-3d-design.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-3d-design.png" alt="icon 3D design"/>
              <div className="text-white font-bold">3D Design</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-content.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-graphic-content.png" alt="icon graphic content"/>
              <div className="text-white font-bold">Graphic Content</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-sound.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-sound-system.png" alt="icon sound system"/>
              <div className="text-white font-bold">Sound System</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-travel.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-tour.png" alt="icon tour and travel"/>
              <div className="text-white font-bold">Tour & Travel</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-equipment.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-equipment.png" alt="icon event equipment"/>
              <div className="text-white font-bold">Event Equipment</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition">
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-live-streaming.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-live.png" alt="icon live streaming"/>
              <div className="text-white font-bold">Live Streaming</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return(
    <main className="relative min-h-screen bg-white">
      <div className="pb-[500px] md:pb-[350px]">
        <NavigationColor />
        
        {serviceSection()}
      </div>
      <Footer />
    </main>
  );
}
export default ServicesPage
export const Head = () => <title>Services</title>