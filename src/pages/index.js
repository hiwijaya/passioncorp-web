import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"
import Slider from "../components/slider"
import Footer from "../components/footer"
import TestimonyCard from "../components/testimonyCard"
import VideoPlay from "../components/videoPlay"
import PartnerSlider from "../components/partnerSlider"
import { navigate } from "gatsby";
import SEO from "../components/seo";
import useSiteMetadata from '../hooks/use-site-metadata';
import AlertBar from "../components/alertBar"
import ContactFloat from "../components/contactFloat"


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
              Established in 2013, we have become a leader in Creative with a strong commitment to core values of the company. 
              We provide high-quality services that creative problems. 
              Passion Corp Indonesia Event Organizer team is ready to provide activity concepts according to client needs and open discussions 
              to exchange ideas and concepts for activities that will be held later. 
              many companies and organizations have trusted their Gatherings, Launchings, Virtual Events, Webinars to us. 
              Passion corp helps you stay focused on your goals.
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
    <div className="inline-flex justify-center w-full bg-slate-100">
      <div className="flex flex-col items-center w-full max-w-7xl mx-4 my-10 sm:my-10">

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3 sm:gap-5 w-full text-xs text-center">
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/pricing?s=event-organizer')}>
            <StaticImage className="w-12 sm:w-12 mb-2" src="../images/services/event-organizer.png" alt="event organizer"/>
            <div className="">Event Organizer</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/pricing?s=show-management')}>
            <StaticImage className="w-12 sm:w-12 mb-2" src="../images/services/show-management.png" alt="show management"/>
            <div className="">Show Management</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/pricing?s=documentation')}>
            <StaticImage className="w-12 sm:w-12 mb-2" src="../images/services/documentation.png" alt="documentation"/>
            <div className="">Documentation</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/pricing?s=3d-design')}>
            <StaticImage className="w-12 sm:w-12 mb-2" src="../images/services/3d-design.png" alt="3D design"/>
            <div className="">3D Design</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/pricing?s=graphics-content')}>
            <StaticImage className="w-12 sm:w-12 mb-2" src="../images/services/graphic-content.png" alt="graphic content"/>
            <div className="">Graphic Content</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/pricing?s=sound-system')}>
            <StaticImage className="w-12 sm:w-12 mb-2" src="../images/services/sound-system.png" alt="sound system"/>
            <div className="">Sound System</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/pricing?s=tour-travel')}>
            <StaticImage className="w-12 sm:w-12 mb-2" src="../images/services/tour.png" alt="tour & travel"/>
            <div className="">Tour & Travel</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/pricing?s=event-equipment')}>
            <StaticImage className="w-12 sm:w-12 mb-2" src="../images/services/equipment.png" alt="event eqipment"/>
            <div className="">Event Equipment</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/pricing?s=live-streaming')}>
            <StaticImage className="w-12 sm:w-12 mb-2" src="../images/services/live.png" alt="live streaming"/>
            <div className="">Live Streaming</div>
          </div>
        </div>
      </div>
    </div>
  )

  const countrySection = () => (
    <div className="inline-flex justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-7xl mx-4 my-10 sm:my-20">
      <div className="font-bold text-2xl sm:text-4xl mb-20 text-center"><span className="text-sky-500">Experienced</span> for World Class Events</div>
        <div className="w-full grid grid-cols-3 md:grid-cols-9 gap-5 text-xs md:text-sm">
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-12 md:w-16 mb-5" src="../images/indonesia.png" alt="Indonesia"/>
            <div>INDONESIA</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-12 md:w-16 mb-5" src="../images/india.png" alt="India"/>
            <div>INDIA</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-12 md:w-16 mb-5" src="../images/philippines.png" alt="Philippines"/>
            <div>PHILIPPINES</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-12 md:w-16 mb-5" src="../images/singapore.png" alt="Singapore"/>
            <div>SINGAPORE</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-12 md:w-16 mb-5" src="../images/thailand.png" alt="Thailand"/>
            <div>THAILAND</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-12 md:w-16 mb-5" src="../images/japan.png" alt="Japan"/>
            <div>JAPAN</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-12 md:w-16 mb-5" src="../images/china.png" alt="China"/>
            <div>CHINA</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-12 md:w-16 mb-5" src="../images/arab.png" alt="Saudi Arabia"/>
            <div>SAUDI ARABIA</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-12 md:w-16 mb-5" src="../images/south-korea.png" alt="South Korea"/>
            <div>SOUTH KOREA</div>
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
        <div className="flex flex-col items-center sm:inline-flex sm:flex-row gap-5 pb-10 sm:overflow-x-auto no-scrollbar w-full">
          <VideoPlay 
            title="Asian Summit Vertiv 2023, Bali" 
            thumbnail="https://img.youtube.com/vi/uhfW9jKMlbo/maxresdefault.jpg"
            link="https://www.youtube.com/embed/uhfW9jKMlbo"/>
          <VideoPlay 
            title="HUT PERTAMINA 66th" 
            thumbnail="https://img.youtube.com/vi/EihpKPFFOZM/maxresdefault.jpg"
            link="https://www.youtube.com/embed/EihpKPFFOZM"/>
          <VideoPlay 
            title="Family Symphony" 
            thumbnail="https://img.youtube.com/vi/qvLGlzah2BI/maxresdefault.jpg"
            link="https://www.youtube.com/embed/qvLGlzah2BI"/>
          <VideoPlay 
            title="Pertagas Seventeen Anniversary" 
            thumbnail="https://img.youtube.com/vi/3nh6If9cAVc/maxresdefault.jpg"
            link="https://www.youtube.com/embed/3nh6If9cAVc"/>
        </div>
        <a href="/portfolio" className="bg-sky-400 rounded-full text-white px-10 py-5">WE HAVE MORE!</a>
      </div>
    </div>
  )

  const partnerSection = () => (
    <div className="relative inline-flex justify-center w-full bg-slate-100">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
        <div className="w-fit relative mb-10 ">
          <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-36 sm:w-56 h-3"></div>
          <h2 className="relative text-2xl sm:text-4xl font-bold">Trusted Partners</h2>
        </div>
        <p className="mb-10 text-center">
          Collaborate with local, national and global communities to create 
          events that are more comprehensive and best suit the desired concept
        </p>
        <PartnerSlider/>
      </div>
    </div>
  )

  const touchSection = () => (
    <div className="relative inline-flex justify-center w-full">
      <div className="z-10 w-full max-w-7xl mx-4 my-10 sm:my-20">
        <div className="w-full h-[420px] sm:h-[450px] md:h-[300px] bg-cover bg-[url('../images/background.png')] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex flex-col items-center xl:items-start justify-center flex-1 pl-0 md:pl-10 text-white">
              <div className="hidden md:block text-center">Passion Corp Indonesia as a solution your event matters</div>
              <div className="text-2xl font-bold mb-5 text-center px-5 md:px-0 mt-5 md:mt-0">Do you want your event to be quality? Just Passion.</div>
              <a href="https://wa.me/6282311000310?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20need%20you%20For%20our%20Event%20be%20quality%20%0A%0AI%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F" target="_blank" className="bg-yellow-400 px-14 py-4 text-black rounded-xl">Get in Touch</a>
            </div>
            <div className="flex justify-end items-end">
              <StaticImage className="w-11/12 md:w-[380px] xl:w-[450px]" src="../images/image-group.png" alt="image group" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )


  return (
    <main className="relative min-h-screen bg-white">
      <AlertBar/>
      <ContactFloat/>
      <div className="relative pb-[500px] md:pb-[350px]">
        <Navigation />
        <Slider />
        {serviceSection()}

        {aboutUsSection()}
        {glanceSection()}
        {countrySection()}
        {testimonySection()}
        {portfolioSection()}
        {partnerSection()}    
        {touchSection()}

      </div>
      <Footer/>
    </main>
  )
}

export default IndexPage;

export const Head = () => {
  const { title, siteUrl, image } = useSiteMetadata();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    url: siteUrl,
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: title,
    url: siteUrl,
    logo: siteUrl + image,
    sameAs: [
      'https://www.instagram.com/passioncorp.id/',
    ],
  };

  return (
    <>
      <SEO
        title="Passion Corp - Go Passion Go World!"
        description="Passion Corp is comprised of professional, compassionate and Event Planners and Assistants who love helping clients with special events."
        keywords="Passion Corp, Passion Corp Indonesia"
        schemaMarkup={[websiteSchema, organizationSchema]}
      />
    </>
  );
};