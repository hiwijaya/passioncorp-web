import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import ImageGallery from "../components/imageGallery";
import VideoPlay from "../components/videoPlay"
import SEO from "../components/seo";


const portfolioPage = () => {

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
            title="Pertagas Seventeen Anniversary" 
            thumbnail="https://img.youtube.com/vi/3nh6If9cAVc/maxresdefault.jpg"
            link="https://www.youtube.com/embed/3nh6If9cAVc"/>
          <VideoPlay 
            title="VIVO V29E Brand Launching" 
            thumbnail="https://img.youtube.com/vi/ZRUz3uyifzU/maxresdefault.jpg"
            link="https://www.youtube.com/embed/ZRUz3uyifzU"/>
          <VideoPlay 
            title="Poundfit Hari Gizi Nasional Kemenkes" 
            thumbnail="https://img.youtube.com/vi/Qu07WW6bF-Q/maxresdefault.jpg"
            link="https://www.youtube.com/embed/Qu07WW6bF-Q"/>
          <VideoPlay 
            title="HUT PERTAMINA 66th" 
            thumbnail="https://img.youtube.com/vi/EihpKPFFOZM/maxresdefault.jpg"
            link="https://www.youtube.com/embed/EihpKPFFOZM"/>
          <VideoPlay 
            title="Family Symphony" 
            thumbnail="https://img.youtube.com/vi/qvLGlzah2BI/maxresdefault.jpg"
            link="https://www.youtube.com/embed/qvLGlzah2BI"/>
          <VideoPlay 
            title="Pertamina PET 36th Anniversary" 
            thumbnail="https://img.youtube.com/vi/0wGoB8WUiH4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/0wGoB8WUiH4"/>



          <VideoPlay 
            title="Forum Nasional Pelindungan Data, Bali" 
            thumbnail="https://img.youtube.com/vi/O70Z5igRpgc/maxresdefault.jpg"
            link="https://www.youtube.com/embed/O70Z5igRpgc"/>
          <VideoPlay 
            title="Indoin Infinite 2023, Ritz Carlton Jakarta" 
            thumbnail="https://img.youtube.com/vi/bFlQzp0MFT4/maxresdefault.jpg"
            link="https://www.youtube.com/embed/bFlQzp0MFT4"/>
          <VideoPlay 
            title="30,000+ Paragonian Rekor Muri" 
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

  const countrySection = () => (
    <div className="inline-flex justify-center w-full bg-footer">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
        <div className="font-bold text-2xl sm:text-4xl mb-20 text-center"><span className="text-sky-500">Experienced</span> for World Class Events</div>
        <div className="w-full grid grid-cols-3 md:grid-cols-7 gap-10">
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-20 mb-5" src="../images/indonesia.png" alt="Indonesia"/>
            <div>INDONESIA</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-20 mb-5" src="../images/india.png" alt="India"/>
            <div>INDIA</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-20 mb-5" src="../images/philippines.png" alt="Philippines"/>
            <div>PHILIPPINES</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-20 mb-5" src="../images/singapore.png" alt="Singapore"/>
            <div>SINGAPORE</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-20 mb-5" src="../images/thailand.png" alt="Thailand"/>
            <div>THAILAND</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold">
            <StaticImage className="w-20 mb-5" src="../images/japan.png" alt="Japan"/>
            <div>JAPAN</div>
          </div>
          <div className="flex flex-col justify-center items-center font-bold col-span-3 md:col-span-1">
            <StaticImage className="w-20 mb-5" src="../images/china.png" alt="Japan"/>
            <div>CHINA</div>
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
export default portfolioPage;
export const Head = () => (
  <SEO title={'Portfolio'}/>
)