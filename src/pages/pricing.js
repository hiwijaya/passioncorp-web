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
import useSiteMetadata from '../hooks/use-site-metadata';


const PricingPage = () => {

  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false)

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

  const introButton = () => (
    <div className="flex flex-col lg:flex-row items-center mt-10 space-x-0 space-y-5 lg:space-x-10 lg:space-y-0">
      <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6282311000310?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F%20%E2%80%9Cfree%20consultation%E2%80%9D')}`} target="_blank" rel="noreferrer" 
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
        <StaticImage className="w-full mb-10" src="../images/passion-map.png" alt="passion map" />
        {giftSection()}
      </div>
    </div>
  )

  const giftSection = () => (
    <div className="w-full rounded-xl bg-gradient-to-b sm:bg-gradient-to-r from-sky-700 to-sky-300 text-white px-10 py-5">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-5 space-x-0 sm:space-x-5 sm:space-y-0">
        <StaticImage className="w-12" src="../images/icon-gift.png" alt="icon gift" />
        <div className="flex-1 flex-col items-center">
          <div className="font-bold text-base text-center sm:text-start">You can get better deals for your choice</div>
          <div className="text-sm text-center sm:text-start">consult your event, for better service. Now it's your turn!</div>
        </div>
        <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6282311000310?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F%0A%0A-Get%20better%20deals-')}`} target="_blank" 
          className="rounded-xl bg-white text-sky-400 font-bold px-6 py-3">Contact Us</a>
      </div>
    </div>
  )

  return(
    <main className="relative min-h-screen bg-white">
      <AlertBar/>
      <ContactFloat/>
      <div className="relative pb-[500px] md:pb-[350px]">
        <Navigation />
        {showPlayer && player()}
        <div className="relative w-full h-screen">
          <StaticImage className="w-full h-full" imgClassName="object-cover h-full" src="../images/image-service.png" alt="slide 1" />
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <div className="font-bold text-2xl lg:text-5xl text-sky-500 mb-5 text-center lg:text-left">OUR SERVICE</div>
              <p className="w-full lg:max-w-2xl text-center lg:text-left">
                Supported by the best Management Team, lets #ConsultTogether with Passion Corp Indonesia as the first step your event success
              </p>
              {introButton()}
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
export default PricingPage;


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
        title="Pricing"
        description="Passion Corp is comprised of professional, compassionate and Event Planners and Assistants who love helping clients with special events."
        keywords="Passion Corp, Passion Corp Indonesia, Pricing, Discount, Promo"
        schemaMarkup={[websiteSchema, organizationSchema]}
      />
    </>
  );
};