import * as React from "react"
import { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import servicesData from "../content/services.json";
import PartnerSlider from "../components/partnerSlider";
import VideoPlay from "../components/videoPlay";
import { navigate } from "gatsby";
import AlertBar from "../components/alertBar";
import ContactFloat from "../components/contactFloat";
import SEO from "../components/seo";


const PricingPage = () => {

  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [showDropdown, setShowDropdown] = useState(false);

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

        <div className="flex flex-row items-center py-5">
          <div className="text-gray-500">Start from</div>
          <div className="text-2xl ml-2">{selectedService.packages[0].price}</div>
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
                  <a href={`/kontakWA?redirect=${encodeURIComponent(`https://wa.me/6282311000310?text=Thank%20you%20for%20contacting%20Passion%20Corp%20Indonesia.%20While%20waiting%20for%20our%20support%20team%20to%20respond%2C%20please%20fill%20in%20first%3A%0A%0AName%3A%0ACompany%20name%3A%0AServices%20you%20want%20to%20ask%20about%3A%20${selectedService.title}%2F${pkg.level}%0ABudget%20Estimate%3A%0A%0Ahttps%3A%2F%2Fpassioncorp.id%2Fpricing%3Fs%3D${selectedService.slug}%0A%0AThank%20You.`)}`}
                    className="inline-block border-2 border-sky-500 rounded-xl w-full text-sky-500 py-5 text-center" target="_blank" rel="noreferrer">Ask More</a>
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

        <div className="relative w-full max-w-lg">
          <div className="flex flex-row items-center h-16 border border-sky-500 rounded-full cursor-pointer"
            onClick={() => {
              setShowDropdown((prevState) => !prevState);
            }}>
            <div className="flex-1 text-center ml-10 font-bold">{selectedService.title}</div>
            <div className="w-10">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512"><path d="M19.061,7.854a1.5,1.5,0,0,0-2.122,0l-4.586,4.585a.5.5,0,0,1-.707,0L7.061,7.854A1.5,1.5,0,0,0,4.939,9.975l4.586,4.586a3.5,3.5,0,0,0,4.95,0l4.586-4.586A1.5,1.5,0,0,0,19.061,7.854Z"/></svg>
            </div>
          </div>
          {
            showDropdown &&
            <div className="absolute top-20 w-full shadow-xl rounded-lg py-5 overflow-y-auto h-80 bg-white overflow-hidden z-10">
            {
              servicesData.map((service, i) => (
                <div key={i} className="mx-10 text-center cursor-pointer py-3"
                  onClick={() => {
                    setSelectedService(servicesData[i]);
                    setShowDropdown(false);
                  }}>
                  {service.title}
                </div>
              ))
            }
          </div>
          }
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
      <AlertBar/>
      <ContactFloat/>
      <div className="relative pb-[500px] md:pb-[350px]">
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
export const Head = () => (
  <SEO title={'Pricing'}/>
)