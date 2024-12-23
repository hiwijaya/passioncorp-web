import * as React from "react";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import ImageGallery from "../components/imageGallery";
import VideoPlay from "../components/videoPlay"
import ContactFloat from "../components/contactFloat";
import SEO from "../components/seo";
import useSiteMetadata from '../hooks/use-site-metadata';


const PortfolioPage = () => {

  const [showPlayer, setShowPlayer] = useState(false);

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
          <div className="font-bold">BTS PASSION CORP INDONESIA</div>
          <div className="p-3 bg-slate-200 rounded-full cursor-pointer" role="button" 
            onClick={() => setShowPlayer(prevState => !prevState)}>
            <StaticImage className="w-6" src="../images/icon-close-big.png" alt="close"/>
          </div>
        </div>
        { 
          <iframe className="h-full" src={'https://www.youtube.com/embed/vFSfgtsYUWw'} referrerpolicy="no-referrer-when-downgrade"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        }
      </div>
    </div>
  )

  const gallerySection = () => (
    <div className="inline-flex justify-center w-full ">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
      <div className="relative mb-10">
        <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-16 sm:w-20 h-3"></div>
        <h2 className="relative text-2xl sm:text-4xl font-bold">Gallery</h2>
      </div>
      <p className="text-center mb-10 w-full max-w-2xl"> 
        we make everyone enjoy their time with us. No matter how many participants there are, 
        and no matter how heavy your burden is in preparing this event, we are here to provide answers for the success of your event.
      </p>

        <ImageGallery/>
      </div>
    </div>
  )

  const videoSection = () => (
    <div className="inline-flex justify-center w-full ">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 mb-10 sm:mb-20">
      <div className="font-bold text-2xl sm:text-4xl mb-10 text-center sm:text-left">Know More About <span className="text-sky-500">Our Story</span></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10">
          <VideoPlay 
            title="Asian Summit Vertiv 2023, Bali" 
            thumbnail="https://img.youtube.com/vi/uhfW9jKMlbo/maxresdefault.jpg"
            link="https://www.youtube.com/embed/uhfW9jKMlbo"/>
          <VideoPlay 
            title="NieisenIQ Indonesia Executive Summit 2024" 
            thumbnail="https://img.youtube.com/vi/6vANFRmn7lc/maxresdefault.jpg"
            link="https://www.youtube.com/embed/6vANFRmn7lc"/>
          <VideoPlay 
            title="Pertagas Seventeen Anniversary" 
            thumbnail="https://img.youtube.com/vi/3nh6If9cAVc/maxresdefault.jpg"
            link="https://www.youtube.com/embed/3nh6If9cAVc"/>
          <VideoPlay 
            title="8th 'Belt and Road' Business Services Forum and Celebration ( Indonesia - Beijing ) 2024"
            thumbnail="https://img.youtube.com/vi/UJxusLiAZ5w/maxresdefault.jpg"
            link="https://www.youtube.com/embed/UJxusLiAZ5w"/>
          <VideoPlay 
            title="International Conference PVC 2024" 
            thumbnail="https://img.youtube.com/vi/T_KlIjG_nbE/maxresdefault.jpg"
            link="https://www.youtube.com/embed/T_KlIjG_nbE"/>
          <VideoPlay 
            title="Corporate Gathering BCA 2024" 
            thumbnail="https://img.youtube.com/vi/XkfQh9oFz0E/maxresdefault.jpg"
            link="https://www.youtube.com/embed/XkfQh9oFz0E"/>
          <VideoPlay 
            title="GOTION & ICBC Conference 2024" 
            thumbnail="https://img.youtube.com/vi/KpoVRrV0pvQ/maxresdefault.jpg"
            link="https://www.youtube.com/embed/KpoVRrV0pvQ"/>
          <VideoPlay 
            title="Pertamina PET 36th Anniversary" 
            thumbnail="https://img.youtube.com/vi/0wGoB8WUiH4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/0wGoB8WUiH4"/>



          <VideoPlay 
            title="Forum Nasional Pelindungan Data, Bali" 
            thumbnail="https://img.youtube.com/vi/O70Z5igRpgc/maxresdefault.jpg"
            link="https://www.youtube.com/embed/O70Z5igRpgc"/>
          <VideoPlay 
            title="We Clinic - Afternoon Party 2024" 
            thumbnail="https://img.youtube.com/vi/y6VUGDAjRss/maxresdefault.jpg"
            link="https://www.youtube.com/embed/y6VUGDAjRss"/>
          <VideoPlay 
            title="30,000+ Paragonian Rekor Muri" 
            thumbnail="https://img.youtube.com/vi/msxYu8Ow4I8/maxresdefault.jpg"
            link="https://www.youtube.com/embed/msxYu8Ow4I8"/>
          <VideoPlay 
            title="Cyber Security Symphosiums 2024" 
            thumbnail="https://img.youtube.com/vi/kdcf2tn1NYE/maxresdefault.jpg"
            link="https://www.youtube.com/embed/kdcf2tn1NYE"/>
          <VideoPlay 
            title="China(Fujian) - Indonesia 2023" 
            thumbnail="https://img.youtube.com/vi/G5PGI_Y-KN4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/G5PGI_Y-KN4"/>
          <VideoPlay 
            title="Junior High School Graduation" 
            thumbnail="https://img.youtube.com/vi/AewdYg5AMm4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/AewdYg5AMm4"/>
          <VideoPlay 
            title="Behind The Scene NIQ" 
            thumbnail="https://img.youtube.com/vi/1KXEeF3EVv4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/1KXEeF3EVv4"/>

          <VideoPlay 
            title="Sun Energy 2023" 
            thumbnail="https://img.youtube.com/vi/QyffSIrsnIo/maxresdefault.jpg"
            link="https://www.youtube.com/embed/QyffSIrsnIo"/>
          <VideoPlay 
            title="Poundfit Hari Gizi Nasional Kemenkes" 
            thumbnail="https://img.youtube.com/vi/Qu07WW6bF-Q/maxresdefault.jpg"
            link="https://www.youtube.com/embed/Qu07WW6bF-Q"/>
          <VideoPlay 
            title="HUT PERTAMINA 66th" 
            thumbnail="https://img.youtube.com/vi/EihpKPFFOZM/maxresdefault.jpg"
            link="https://www.youtube.com/embed/EihpKPFFOZM"/>
          <VideoPlay 
            title="VIVO V29E Brand Launching" 
            thumbnail="https://img.youtube.com/vi/ZRUz3uyifzU/maxresdefault.jpg"
            link="https://www.youtube.com/embed/ZRUz3uyifzU"/>
          <VideoPlay 
            title="Indoin Infinite 2023, Ritz Carlton Jakarta" 
            thumbnail="https://img.youtube.com/vi/bFlQzp0MFT4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/bFlQzp0MFT4"/>
          <VideoPlay 
            title="Birthday Party At Kempinksi Jakarta 2023" 
            thumbnail="https://img.youtube.com/vi/MLAnl5EZq5k/maxresdefault.jpg"
            link="https://www.youtube.com/embed/MLAnl5EZq5k"/>
          <VideoPlay 
            title="Birthday Party at Jakarta Pinishi" 
            thumbnail="https://img.youtube.com/vi/MZX0sVtcmVI/maxresdefault.jpg"
            link="https://www.youtube.com/embed/MZX0sVtcmVI"/>
          <VideoPlay 
            title="Pertamina RUPS 2024" 
            thumbnail="https://img.youtube.com/vi/fKcqH2esQek/maxresdefault.jpg"
            link="https://www.youtube.com/embed/fKcqH2esQek"/>
          <VideoPlay 
            title="KEMENKUMHAM 2023" 
            thumbnail="https://img.youtube.com/vi/CSSTqh1W0aU/maxresdefault.jpg"
            link="https://www.youtube.com/embed/CSSTqh1W0aU"/>
          <VideoPlay 
            title="ALEZA Fashion Show" 
            thumbnail="https://img.youtube.com/vi/7FcLW8K-p3w/maxresdefault.jpg"
            link="https://www.youtube.com/embed/7FcLW8K-p3w"/>
          <VideoPlay 
            title="Family Symphony" 
            thumbnail="https://img.youtube.com/vi/qvLGlzah2BI/maxresdefault.jpg"
            link="https://www.youtube.com/embed/qvLGlzah2BI"/>
          <VideoPlay 
            title="Daikin Gathering 2023" 
            thumbnail="https://img.youtube.com/vi/OiwncNc9XQE/maxresdefault.jpg"
            link="https://www.youtube.com/embed/OiwncNc9XQE"/>
          <VideoPlay 
            title="KAS KOM Meeting 2023, Bali" 
            thumbnail="https://img.youtube.com/vi/6AhcWoFqw0E/maxresdefault.jpg"
            link="https://www.youtube.com/embed/6AhcWoFqw0E"/>
          <VideoPlay 
            title="Asia Customer Experience 2024" 
            thumbnail="https://img.youtube.com/vi/5A0YDEDXTl4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/5A0YDEDXTl4"/>
          <VideoPlay 
            title="Vida Partner Forum 2024" 
            thumbnail="https://img.youtube.com/vi/vW0Hz-WjzrI/maxresdefault.jpg"
            link="https://www.youtube.com/embed/vW0Hz-WjzrI"/>
        </div>
      </div>
    </div>
  )

  const countrySection = () => (
    <div className="inline-flex justify-center w-full bg-footer">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
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

  const contactSection  = () => (
    <div className="inline-flex justify-center w-full ">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
        <div className="font-bold text-xl text-center mb-2">Did you find what you were looking for or need help?</div>
        <p className="mb-10 text-center">
          You can contact Passion sales to find out about products and services from Passion Corp Indonesia
        </p>
        <a href="https://wa.me/6282311000310?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F" className="rounded-xl bg-sky-500 text-white px-10 py-3">CONTACT US</a>
      </div>
    </div>
  )

  return (
    <main className="relative min-h-screen bg-white">
      <ContactFloat/>
      <div className="pb-[500px] md:pb-[350px]">
        <Navigation />
        {showPlayer && player()}
        <div className="relative w-full h-screen">
          <StaticImage className="w-full h-full" imgClassName="object-cover h-full" src="../images/image-portfolio.jpg" alt="Portfolio" />
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <div className="font-bold text-2xl lg:text-5xl text-sky-500 mb-5 text-center lg:text-left">EVENT MEMORABLE</div>
              <p className="w-full lg:max-w-2xl text-center lg:text-left">
                When it comes to events, it's vital to create meaningful, memorable, and measurable experiences for exhibitors and attendes. 
                Why? Because memorable experiences give exhibitors the best change at that coveted "top-of-mind" position with your audiences. 
                Creating those experiences, through, can be a challenge.
                <span className="font-bold">Passion Corp is the answer to goodness</span>
              </p>
              {introButton()}
            </div>
          </div>
        </div>

        {gallerySection()}
        {videoSection()}

        <div className="relative w-full">
          <StaticImage className="w-full h-[160px] md:h-[350px] shrink-0" src="../images/image-success.jpg" alt="innovation"/> 
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <p className="text-xl sm:text-2xl lg:text-5xl text-center mb-5">
                Commitment, Creativity, and Collaboration
              </p>
            </div>
          </div>
        </div>

        {countrySection()}
        {contactSection()}
      </div>
      <Footer />
    </main>
  )
}
export default PortfolioPage;


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
        title="Portfolio"
        description="Passion Corp is comprised of professional, compassionate and Event Planners and Assistants who love helping clients with special events."
        keywords="Passion Corp, Passion Corp Indonesia, Portfolio"
        schemaMarkup={[websiteSchema, organizationSchema]}
      />
    </>
  );
};