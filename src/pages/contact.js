import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import SEO from "../components/seo";


const contactPage = () => {

  const contactSection  = () => (
    <div className="inline-flex justify-center w-full ">
      <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 mb-10 sm:mb-20">
        <div className="font-bold text-xl text-center mb-2">Did you find what you were looking for or need help?</div>
        <p className="mb-10 text-center">
          You can contact Passion sales to find out about products and services from Passion Corp Indonesia
        </p>
        <a href="https://wa.me/6289609399684?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F" className="rounded-xl bg-sky-500 text-white px-10 py-3">CONTACT US</a>
      </div>
    </div>
  )

  return (
    <main className="relative min-h-screen bg-white">
      <div className="pb-[500px] md:pb-[350px]">
        <Navigation />
        <div className="relative w-full h-screen md:h-[600px]">
          <StaticImage className="w-full h-full" imgClassName="object-cover h-full" src="../images/image-contact.jpg" alt="Portfolio" />
          <div className="absolute left-0 top-0 w-full h-full inline-flex justify-center items-center bg-black/75 px-4">
            <div className="w-full max-w-7xl text-white">
              <h1 className="font-bold text-2xl lg:text-5xl text-center mb-5">CONTACT US</h1>
            </div>
          </div>
        </div>

        <div className="relative inline-flex justify-center w-full ">
          <div className="flex flex-col items-center w-full max-w-7xl px-4 xl:px-0 my-10 sm:my-20">
            <div className="w-fit relative mb-10 ">
              <div className="absolute bottom-0 left-3 sm:left-5 bg-sky-300 w-16 sm:w-32 h-3"></div>
              <h2 className="relative text-2xl sm:text-4xl font-bold">Our Office</h2>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-slate-100 p-5 rounded-xl">
                <div className="flex flex-row items-center text-lg font-bold mb-5">
                  <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M12,.042a9.992,9.992,0,0,0-9.981,9.98c0,2.57,1.99,6.592,5.915,11.954a5.034,5.034,0,0,0,8.132,0c3.925-5.362,5.915-9.384,5.915-11.954A9.992,9.992,0,0,0,12,.042ZM12,14a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z"/></svg>
                  JAKARTA
                </div>
                <p>
                  18 Parc Place, SCBD Tower B Lantai 2, <br/>
                  JL Jend Sudirman Kav.52-53, <br/>
                  Jakarta Selatan, 12190
                </p>
              </div>
              <div className="bg-slate-100 p-5 rounded-xl">
                <div className="flex flex-row items-center text-lg font-bold mb-5">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M12,.042a9.992,9.992,0,0,0-9.981,9.98c0,2.57,1.99,6.592,5.915,11.954a5.034,5.034,0,0,0,8.132,0c3.925-5.362,5.915-9.384,5.915-11.954A9.992,9.992,0,0,0,12,.042ZM12,14a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z"/></svg>
                  BALI
                </div>
                <p>
                  Sunset Road 819 <br/>
                  Bali Ruko Sunset Indah No.10 <br/>
                  Br. Abianbase, Kel.Kuta, KOta Badung <br/>
                  Bali, Indonesia
                </p>
              </div>
              <div className="bg-slate-100 p-5 rounded-xl">
                <div className="flex flex-row  items-center text-lg font-bold mb-5">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M12,.042a9.992,9.992,0,0,0-9.981,9.98c0,2.57,1.99,6.592,5.915,11.954a5.034,5.034,0,0,0,8.132,0c3.925-5.362,5.915-9.384,5.915-11.954A9.992,9.992,0,0,0,12,.042ZM12,14a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z"/></svg>
                  BALIKPAPAN
                </div>
                <p>
                  JL Prapatan Dalam No.9 A<br/>
                  Telaga Sari, Balikpapan Kota<br/>
                  Kalimantan Timur, Indonesia
                </p>
              </div>
            </div>

          </div>
        </div>

        {contactSection()}


      </div>
      <Footer />
    </main>
  );
}
export default contactPage;
export const Head = () => (
  <SEO title={'Contact Us'}/>
)