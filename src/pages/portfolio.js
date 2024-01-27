import * as React from "react"
import { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import Navigation from "../components/navigation";


const portfolioPage = () => {

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


      </div>
      <Footer />
    </main>
  )
}
export default portfolioPage;
export const Head = () => <title>Portfolio</title>