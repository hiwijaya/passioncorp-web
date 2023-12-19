import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"
import Slider from "../components/slider"
import Footer from "../components/footer"
import TestimonyCard from "../components/testimonyCard"
import VideoPlay from "../components/videoPlay"
import PartnerSlider from "../components/partnerSlider"


const IndexPage = () => {

  const aboutUsSection = () => (
    <div className="inline-flex justify-center w-full">
      <div className="w-full max-w-7xl my-10 sm:my-20 mx-4">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="flex-1">
            <div className="relative mb-10 md:mb-20">
              <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-16 sm:w-24 h-3"></div>
              <h2 className="relative text-2xl sm:text-4xl font-bold">About Us</h2>
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
            <StaticImage className="w-[320px] sm:w-[360px] lg:w-[450px]"
              src="../images/image-profile.png" alt="about us" />
          </div>
        </div>
      </div>
    </div>
  )

  const glanceSection = () => (
    <div className="inline-flex justify-center w-full bg-slate-100">
      <div className="w-full max-w-7xl my-10 sm:my-20 mx-4">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center xl:items-start">
            <div className="relative mb-5 xl:mb-14">
              <div className="hidden sm:block absolute bottom-0 left-5 bg-sky-300 w-72 h-3"></div>
              <h2 className="relative text-2xl sm:text-4xl font-bold text-center"><span className="text-sky-500 sm:text-black">Passion</span> at a glance</h2>
            </div>
            <p className="w-full max-w-md text-center xl:text-left">
              With more than 1000 creative workers that we call The Passioners all over Indonesia,
              we keep on innovating for better service, programs, and ways of working to create more goodness to the society.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-10 w-full sm:w-auto">
            <div className="flex flex-col justify-center items-center">
              <div className="border-8 border-slate-300 p-8 rounded-full mb-3 sm:mb-5">
                <StaticImage className="w-10 sm:w-14" src="../images/icon-event.png" alt="event" />
              </div>
              <div className="font-bold text-xl sm:text-3xl">500+</div>
              <div>Events</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                <StaticImage className="w-10 sm:w-14" src="../images/icon-city.png" alt="city" />
              </div>
              <div className="font-bold text-xl sm:text-3xl">20</div>
              <div>Cities</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                <StaticImage className="w-10 sm:w-14" src="../images/icon-partner.png" alt="partner" />
              </div>
              <div className="font-bold text-xl sm:text-3xl">300+</div>
              <div>Partners</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border-8 border-slate-300 p-8 rounded-full mb-5">
                <StaticImage className="w-10 sm:w-14" src="../images/icon-service.png" alt="service" />
              </div>
              <div className="font-bold text-xl sm:text-3xl">30+</div>
              <div>Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


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

  const testimonySection = () => (
    <div className="inline-flex justify-center w-full bg-slate-100">
      <div className="flex flex-col w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
        <div className="font-bold text-2xl sm:text-4xl mb-5 sm:mb-10">What <span className="text-sky-500">People Say</span> <br/> About Us</div>
        <div className="inline-flex gap-5 overflow-x-auto no-scrollbar w-full">

          <TestimonyCard 
            words="It is often interesting, in retrospect, to consider the trifling causes that lead to great events. 
            A chance encounter, a thoughtless remark  and the tortuous chain reaction of coincidence is set in motion, 
            leading with devious inevitability to some resounding climax."
            name="Akira Murayama"
            title="CEO ABEAM Consulting"/>

          <TestimonyCard 
            words="Thank you for making our event a success. I am very satisfied with the performance of your team. 
            I hope you have more success in the future."
            name="Pradeep Bahuguna"
            title="CEO Indoin Business Group"/>

          <TestimonyCard 
            words="Pertemuan pertama yang bikin gak lupa 🤣 sangat friendly sampe bisa bikin suasana cair. 
            So sorry banyak revisi di menjelang hari H semua tim keren yang telah sama-sama mempersiapkan 
            dan menyelesaikan bersama event ini dengan baik. terima kasih untuk komunikasi dan diskusi selama ini."
            name="Esther Suhana"
            title="Marketing Manager CBQA Global"/>
          
          <TestimonyCard 
            words="We appreciate and thank you so much for Passion Corp EO Pak Managing Director bilang all in Oke bagus semua"
            name="Mohammad Rifani"
            title="Legal and license Asst. Manager"/>

          <TestimonyCard 
            words="This is a big event, participants come from various countries in Asia. 
            Thank you to eo for his contribution to help get involved in this event.
            I wish you continued success in the future."
            name="Daniel Sim"
            title="Senior Director Asia Vertiv"/>
          
          <TestimonyCard 
            words="acaranya seru banget, event ini juga waktunya kurang lama karena saking asiknya
            ngobrolnya. pertanyaannya banyak banget, dan menginspirasi aku banget sebaga 
            pembicaranya. sampai ketemu di next session."
            name="Analisa Widyaningrum"
            title="Director Analisa Personality Development Center"/>

          <TestimonyCard 
            words="seneng banget hari ini bisa gabung di acara welcoming party nya paranovo, 
            menurutku acara nya seru banget dan teman2 bisa dateng sangat antusias,
            mudah-mudahan temen2 bisa dapet ilmu yang bermanfaat dan bisa diaplikasikan 
            sukses terus buat semuanya."
            name="Nadhira Afifa"
            title="Limitless Foundation Indonesia"/>

        </div>
      </div>
    </div>
  )


  const portfolioSection = () => (
    <div className="inline-flex justify-center w-full ">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
        <div className="w-fit relative mb-10 ">
          <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-28 sm:w-44 h-3"></div>
          <h2 className="relative text-2xl sm:text-4xl font-bold">See Our Work</h2>
        </div>
        <p className="mb-10 text-center">
          we are there every step of the way to provide you with the exceptional event and service you deserve
        </p>
        <div className="inline-flex gap-5 pb-10 overflow-x-auto no-scrollbar w-full">
          <VideoPlay 
            title="Asian Summit Vertiv 2023, Bali" 
            thumbnail="https://img.youtube.com/vi/uhfW9jKMlbo/maxresdefault.jpg"
            link="https://www.youtube.com/embed/uhfW9jKMlbo"/>
          <VideoPlay 
            title="Forum Nasional Pelindungan Data, Bali" 
            thumbnail="https://img.youtube.com/vi/O70Z5igRpgc/maxresdefault.jpg"
            link="https://www.youtube.com/embed/O70Z5igRpgc"/>
          <VideoPlay 
            title="Indoin Infinite 2023, Ritz Carlton Jakarta" 
            thumbnail="https://img.youtube.com/vi/bFlQzp0MFT4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/bFlQzp0MFT4"/>
          <VideoPlay 
            title="3000+ Paragonian Rekor Muri" 
            thumbnail="https://img.youtube.com/vi/msxYu8Ow4I8/maxresdefault.jpg"
            link="https://www.youtube.com/embed/msxYu8Ow4I8"/>
        </div>
        <button className="bg-sky-400 rounded-full text-white px-10 py-5">WE HAVE MORE!</button>
      </div>
    </div>
  )

  const touchSection = () => (
    <div className="relative inline-flex justify-center w-full">
      <div className="z-10 w-full max-w-7xl mx-4 mb-10">
        <div className="w-full h-[250px] sm:h-[300px] bg-cover bg-[url('../images/background.png')] rounded-3xl overflow-hidden">
          <div className="flex flex-row h-full">
            <div className="flex flex-col items-center xl:items-start justify-center flex-1 px-4 text-white">
              <div className="hidden sm:block text-center">Passion Corp Indonesia as a solution your event matters</div>
              <div className="text-2xl font-bold mb-10 xl:mb-5 text-center">Do you want your event to be quality? Just Passion.</div>
              <button className="bg-yellow-400 w-52 py-4 text-black rounded-xl">Get in Touch</button>
            </div>
            <div className="hidden xl:flex justify-end items-end">
              <StaticImage className="w-[400px] xl:w-[450px]" src="../images/image-group.png" alt="image group" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )


  return (
    <main className="relative min-h-screen bg-white">
      <div className="pb-[500px] md:pb-[350px]">
        <Navigation />
        <Slider />

        {aboutUsSection()}
        {glanceSection()}
        {serviceSection()}
        {testimonySection()}
        {portfolioSection()}

        <PartnerSlider/>
        
        {touchSection()}

        

      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>Passion Corp</title>