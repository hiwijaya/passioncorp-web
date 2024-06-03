import * as React from "react"
import { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import faqData from "../content/faq.json";
import SEO from "../components/seo";


const FaqPage = () => {

  const [selected, setSelected] = useState(-1);


  const contactSection  = () => (
    <div className="inline-flex justify-center w-full ">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 mb-10 sm:mb-20">
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
        <div className="relative w-full h-screen md:h-[600px]">
          <StaticImage className="w-full h-full" imgClassName="object-cover h-full" src="../images/image-faq.jpg" alt="Portfolio" />
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <h1 className="font-bold text-2xl lg:text-5xl text-center mb-5">Have a Question?</h1>
            </div>
          </div>
        </div>

        <div className="relative inline-flex justify-center w-full ">
          <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
            <div className="w-fit relative mb-10 ">
              <div className="absolute bottom-0 left-1 sm:left-3 bg-sky-300 w-10 sm:w-16 h-3"></div>
              <h2 className="relative text-2xl sm:text-4xl font-bold">FAQ</h2>
            </div>

            <div className="w-full">
              {
                faqData.map((faq, i) => (
                  <div key={i} className="px-5 sm:px-10 py-5 w-full shadow-lgx rounded-xl mb-5 sm:mb-10 cursor-pointer bg-slate-100"
                    onClick={() => {
                      if(selected === i) {
                        setSelected(-1);
                      }
                      else{
                        setSelected(i);
                      }
                    }}>
                    <div className="flex flex-row font-bold">
                      <div className="flex-1">{faq.question}</div>
                      <div>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512"><path d="M19.061,7.854a1.5,1.5,0,0,0-2.122,0l-4.586,4.585a.5.5,0,0,1-.707,0L7.061,7.854A1.5,1.5,0,0,0,4.939,9.975l4.586,4.586a3.5,3.5,0,0,0,4.95,0l4.586-4.586A1.5,1.5,0,0,0,19.061,7.854Z"/></svg>
                      </div>
                    </div>
                    <p className={`${selected === i ? 'block' : 'hidden'} mt-5`}>{faq.answer}</p>
                  </div>
                ))
              }
            </div>

          </div>
        </div>

        {contactSection()}


      </div>
      <Footer />
    </main>
  );

}
export default FaqPage;
export const Head = () => (
  <SEO title={'FAQ'}/>
)