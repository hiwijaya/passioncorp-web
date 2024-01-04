import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import Navigation from "../components/navigation";

const AboutPage = () => {


  return (
    <main className="relative min-h-screen bg-white">
      <div className="pb-[500px] md:pb-[350px]">
        <Navigation />
        <div className="relative w-full h-screen">
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

        <div className="w-full py-16">
          <div className="flex flex-row items-center justify-center w-full">
            <StaticImage className="w-32" src="../images/logo-color.png" alt="passion logo" />
            <h2 className="ml-5 text-3xl text-primary font-medium">Passion Corp Indonesia</h2>
          </div>
        </div>

        <div className="inline-flex justify-center w-full bg-slate-100">
          <div className="flex flex-col w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
            <div className="relative mb-10">
              <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-20 sm:w-32 h-3"></div>
              <h2 className="relative text-2xl sm:text-4xl font-bold">Our Vision</h2>
            </div>
            <p>
              A company committed to having the best corporate governance and continous improvement,
              in order to make each day better than yesterday, through high quality service that benefit
              the Passioners, partners, society, and the environment.
            </p>
          </div>
        </div>

        <div className="inline-flex justify-center w-full ">
          <div className="flex flex-col w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
            <div className="relative mb-10">
              <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-24 sm:w-36 h-3"></div>
              <h2 className="relative text-2xl sm:text-4xl font-bold">Our Mission</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-row items-center">
                <StaticImage className="w-16 h-16 shrink-0" src="../images/image-development.png" alt="developing passioners"/>
                <div className="ml-5">
                  <div className="font-bold mb-2">Developing Passioners</div>
                  <p className="text-sm">
                    We continous learn and develop competens Passioners with with competitive advantage.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <StaticImage className="w-16 h-16 shrink-0" src="../images/image-preserving.png" alt="developing passioners"/>
                <div className="ml-5">
                  <div className="font-bold mb-2">Preserving the Earth</div>
                  <p className="text-sm">
                    We try our best to protect the earth sustainably as it provides all we need to live.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <StaticImage className="w-16 h-16 shrink-0" src="../images/image-kindness.png" alt="developing passioners"/>
                <div className="ml-5">
                  <div className="font-bold mb-2">Creating kindness for Customers</div>
                  <p className="text-sm">
                    We listen to customer needs and create product beyond customers expectation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <StaticImage className="w-16 h-16 shrink-0" src="../images/image-business.png" alt="developing passioners"/>
                <div className="ml-5">
                  <div className="font-bold mb-2">Developing Business</div>
                  <p className="text-sm">
                    We expand our range of products, service through business expansion
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <StaticImage className="w-16 h-16 shrink-0" src="../images/image-improvement.png" alt="developing passioners"/>
                <div className="ml-5">
                  <div className="font-bold mb-2">Continous Improvement</div>
                  <p className="text-sm">
                    We constantly innovate in every process to improve our product quality.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <StaticImage className="w-16 h-16 shrink-0" src="../images/image-grow.png" alt="developing passioners"/>
                <div className="ml-5">
                  <div className="font-bold mb-2">Grow Together</div>
                  <p className="text-sm">
                    We work together with business partners for mutual benefit.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
      <Footer />
    </main>
  );

}
export default AboutPage
export const Head = () => <title>About Us</title>