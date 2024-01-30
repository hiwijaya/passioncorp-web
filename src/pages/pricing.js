import * as React from "react"
import { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import servicesData from "../content/services.json";
import PartnerSlider from "../components/partnerSlider";
import VideoPlay from "../components/videoPlay";
import { navigate } from "gatsby";


const PricingPage = () => {

  const [selectedService, setSelectedService] = useState(servicesData[0]);

  useEffect(() => {

    if(typeof window !== 'undefined'){
      const urlParams = new URLSearchParams(window.location.search);
      if(urlParams.has('s')){
        findServiceBySlug(urlParams.get('s'));
      }
    }

  }, []);

  const findServiceBySlug = (s) => {
    for (let i = 0; i < servicesData.length; i++) {
      const service = servicesData[i];
      if(service.slug === s){
        setSelectedService(service);
        navigate('#pricing');
        return;
      }
    }

    setSelectedService(servicesData[0]);
    navigate('#pricing');
  }

  const packageSection = () => (
    <div id="pricing" className="inline-flex justify-center w-full bg-slate-100">
      <div className="flex flex-col items-center w-full max-w-7xl mx-4 my-10 sm:my-20">
        <div className="w-fit relative mb-5">
          <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-24 sm:w-36 h-3"></div>
          <h2 className="relative text-2xl sm:text-4xl font-bold">{selectedService.title}</h2>
        </div>
        <p className="text-center text-sm mb-10 w-full max-w-2xl">{selectedService.description}</p>
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-start md:space-x-5">
            {selectedService.packages.map((pkg, i) => (
              <div className="flex-1 rounded-lg shadow-lg overflow-hidden mb-5">
                <div className="bg-sky-500 text-white text-lg text-center py-5 md:py-8">
                  <div>{selectedService.title}</div>
                  <div className="font-bold">{pkg.level}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-center py-6 md:py-10">Promo/<span className="text-sky-500 font-bold text-xl md:text-2xl">Special Price</span></div>
                </div>
                <div className="">
                  {pkg.items.map((item, ii) => (
                    <div className="text-center py-2">{item}</div>
                  ))}
                </div>
                <div className="p-6 md:p-10">
                  <button className="border-2 border-sky-500 rounded-xl w-full text-sky-500 py-5 text-center" 
                    onClick={() => {
                      navigate(`https://wa.me/6289609399684?text=Thank%20you%20for%20contacting%20Passion%20Corp%20Indonesia.%20While%20waiting%20for%20our%20support%20team%20to%20respond%2C%20please%20fill%20in%20first%3A%0A%0AName%3A%0ACompany%20name%3A%0AServices%20you%20want%20to%20ask%20about%3A%20${selectedService.title}%0ABudget%20Estimate%20%3A%0A%0Ahttps%3A%2F%2Fpassioncorp.id%2Fpricing%3Fs%3D${selectedService.slug}%0A%0AThank%20You.`)
                    }}>Tanya Lebih Lanjut</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )


  const serviceSection = () => (
    <div className="inline-flex justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-7xl mx-4 my-10 sm:my-20">
        <div className="font-bold text-2xl sm:text-4xl mb-5 text-center sm:text-left">Choose <span className="text-sky-500">The Best</span> For Your Event Needs</div>
        <p className="mb-10 text-center">
          You can choose and we know how to make best for your event
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 text-xl lg:text-2xl">
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition"
            onClick={() => findServiceBySlug('event-organizer')}>
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-event-organizer.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-event-organizer.png" alt="icon event organizer"/>
              <div className="text-white font-bold">Event Organizer</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition"
            onClick={() => findServiceBySlug('show-management')}>
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-show-management.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-show-management.png" alt="icon show management"/>
              <div className="text-white font-bold">Show Management</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition"
            onClick={() => findServiceBySlug('documentation')}>
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-documentation.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-documentation.png" alt="icon documentation"/>
              <div className="text-white font-bold">Documentation</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition"
            onClick={() => findServiceBySlug('3d-design')}>
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-3d-design.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-3d-design.png" alt="icon 3D design"/>
              <div className="text-white font-bold">3D Design</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition"
            onClick={() => findServiceBySlug('graphics-content')}>
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-content.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-graphic-content.png" alt="icon graphic content"/>
              <div className="text-white font-bold">Graphic Content</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition"
            onClick={() => findServiceBySlug('sound-system')}>
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-sound.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-sound-system.png" alt="icon sound system"/>
              <div className="text-white font-bold">Sound System</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition"
            onClick={() => findServiceBySlug('tour-travel')}>
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-travel.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-tour.png" alt="icon tour and travel"/>
              <div className="text-white font-bold">Tour & Travel</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition"
            onClick={() => findServiceBySlug('event-equipment')}>
            <StaticImage className="w-full h-full" imgClassName="object-cover w-full h-full" src="../images/services/thumbnail-equipment.jpg" alt="event organizer"/>
            <div className="absolute left-0 top-0 flex flex-col justify-end sm:justify-start p-6 sm:p-8 w-full h-full bg-black/50">
              <StaticImage className="w-6 sm:w-8 mb-2" src="../images/services/icon-equipment.png" alt="icon event equipment"/>
              <div className="text-white font-bold">Event Equipment</div>
            </div>
          </div>
          <div className="relative w-full h-32 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-500 hover:scale-105 transition"
            onClick={() => findServiceBySlug('live-streaming')}>
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

  const mapsSection = () => (
    <div className="inline-flex justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
        <div className="w-fit relative mb-10 ">
          <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-36 sm:w-56 h-3"></div>
          <h2 className="relative text-2xl sm:text-4xl font-bold">Passion Network</h2>
        </div>
        <p className="mb-10 text-center">
          Supporting events in cities in various regions in Indonesia, both at the scale of ministries, regional institutions and private companies.
        </p>
        <StaticImage className="w-full" src="../images/passion-map.png" alt="passion map" />
      </div>
    </div>
  )

  return(
    <main className="relative min-h-screen bg-white">
      <div className="pb-[500px] md:pb-[350px]">
        <Navigation />
        <div className="relative w-full h-screen">
          <StaticImage className="w-full h-full" imgClassName="object-cover h-full" src="../images/image-service.png" alt="slide 1" />
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <h1 className="font-bold text-2xl lg:text-5xl text-center mb-5">OUR SERVICES</h1>
              <p className="text-center lg:text-lg">
                Supported by the best Management Team, lets #ConsultTogether with Passion Corp Indonesia as the first step your event success
              </p>
            </div>
          </div>
        </div>
        
        {serviceSection()}

        {packageSection()}

        {portfolioSection()}

        {partnerSection()}

        {mapsSection()}
        
      </div>
      <Footer />
    </main>
  );
}
export default PricingPage
export const Head = () => <title>Pricing</title>