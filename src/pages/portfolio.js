import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import ImageGallery from "../components/imageGallery";
import VideoPlay from "../components/videoPlay"


const portfolioPage = () => {

  const gallerySection = () => (
    <div className="inline-flex justify-center w-full ">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
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
          <VideoPlay 
            title="Birthday Party at Jakarta Pinishi" 
            thumbnail="https://img.youtube.com/vi/MZX0sVtcmVI/maxresdefault.jpg"
            link="https://www.youtube.com/embed/MZX0sVtcmVI"/>
          <VideoPlay 
            title="ALEZA Fashion Show" 
            thumbnail="https://img.youtube.com/vi/7FcLW8K-p3w/maxresdefault.jpg"
            link="https://www.youtube.com/embed/7FcLW8K-p3w"/>
          <VideoPlay 
            title="Junior High School Graduation" 
            thumbnail="https://img.youtube.com/vi/AewdYg5AMm4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/AewdYg5AMm4"/>
          <VideoPlay 
            title="Daikin Gathering 2023" 
            thumbnail="https://img.youtube.com/vi/OiwncNc9XQE/maxresdefault.jpg"
            link="https://www.youtube.com/embed/OiwncNc9XQE"/>


          <VideoPlay 
            title="Sun Energy 2023" 
            thumbnail="https://img.youtube.com/vi/QyffSIrsnIo/maxresdefault.jpg"
            link="https://www.youtube.com/embed/QyffSIrsnIo"/>
          <VideoPlay 
            title="KAS KOM Meeting 2023, Bali" 
            thumbnail="https://img.youtube.com/vi/6AhcWoFqw0E/maxresdefault.jpg"
            link="https://www.youtube.com/embed/6AhcWoFqw0E"/>
          <VideoPlay 
            title="Gelaran Budaya Bersama Kapolri 2023" 
            thumbnail="https://img.youtube.com/vi/46i2aRtMuo0/maxresdefault.jpg"
            link="https://www.youtube.com/embed/46i2aRtMuo0"/>
          <VideoPlay 
            title="China(Fujian) - Indonesia 2023" 
            thumbnail="https://img.youtube.com/vi/G5PGI_Y-KN4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/G5PGI_Y-KN4"/>
        </div>
      </div>
    </div>
  )

  return (
    <main className="relative min-h-screen bg-white">
      <div className="pb-[500px] md:pb-[350px]">
        <Navigation />
        <div className="relative w-full h-screen">
          <StaticImage className="w-full h-full" imgClassName="object-cover h-full" src="../images/image-portfolio.jpg" alt="Portfolio" />
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <h1 className="font-bold text-2xl lg:text-5xl text-center mb-5">EVENT MEMORABLE</h1>
              <p className="text-center lg:text-lg">
                When it comes to events, it's vital to create meaningful, memorable, and measurable experiences for exhibitors and attendes.
                Why? Because memorable experiences give exhibitors the best change at that coveted "top-of-mind" position with your audiences.
                Creating those experiences, through, can be a challenge. <br/>
                <span className="font-bold">Passion Corp is the answer to goodness</span>
              </p>
            </div>
          </div>
        </div>

        {gallerySection()}
        {videoSection()}

      </div>
      <Footer />
    </main>
  )
}
export default portfolioPage;
export const Head = () => <title>Portfolio</title>