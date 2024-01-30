import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import Navigation from "../components/navigation";


const contactPage = () => {

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
              <div>
                <div className="text-lg font-bold mb-5">JAKARTA</div>
                <p>
                  18 Parc Place, SCBD Tower B Lantai 2, <br/>
                  JL Jend Sudirman Kav.52-53, <br/>
                  Jakarta Selatan, 12190
                </p>
              </div>
              <div>
                <div className="text-lg font-bold mb-5">BALI</div>
                <p>
                  Sunset Road 819 <br/>
                  Bali Ruko Sunset Indah No.10 <br/>
                  Br. Abianbase, Kel.Kuta, KOta Badung <br/>
                  Bali, Indonesia
                </p>
              </div>
              <div>
                <div className="text-lg font-bold mb-5">BALIKPAPAN</div>
                <p>
                  JL Prapatan Dalam No.9 A<br/>
                  Telaga Sari, Balikpapan Kota<br/>
                  Kalimantan Timur, Indonesia
                </p>
              </div>
            </div>

          </div>
        </div>


      </div>
      <Footer />
    </main>
  );
}
export default contactPage;
export const Head = () => <title>Contact Us</title>