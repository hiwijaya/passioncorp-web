import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import Navigation from "../components/navigation";

const AboutPage = () => {


  return (
    <main className="relative min-h-screen bg-white">
      <div className="pb-[500px] md:pb-[350px]">
        <Navigation />
        <div className="relative w-full h-screen lg:h-[600px]">
          <StaticImage className="w-full h-full" imgClassName="object-none w-96 h-full" src="../images/image-about.jpg" alt="slide 1" />
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <h1 className="font-bold text-2xl lg:text-5xl text-center mb-5">ABOUT PASSION</h1>
              <p className="text-center lg:text-lg">
                Passion is an Indonesia event organizer with the purpose of creating
                a greater good for the society through innovation.
              </p>
            </div>
          </div>
        </div>



        <div className="w-full py-10">
          <div className="flex flex-row items-center justify-center w-full">
            <StaticImage className="w-24" src="../images/logo-color.png" alt="passion logo" />
            <h2 className="ml-5 text-2xl text-primary font-medium">Passion Corp Indonesia</h2>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );

}
export default AboutPage
export const Head = () => <title>About Us</title>