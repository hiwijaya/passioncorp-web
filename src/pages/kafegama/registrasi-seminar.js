import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../../components/seo";


const RegisterPage = () => {

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row h-full text-white overflow-y-auto">
        <div className="flex flex-col items-start lg:items-end flex-[5] bg-gray-900 flex-wrap px-6 lg:pr-20 py-10">
          <div className="max-w-2xl">
            <StaticImage className="w-20 sm:w-24 mb-5" src="../../images/kafegama/kafegama-logo.png" alt="logo KAFEGAMA"/>
            <div className="mb-10">
              <h1 className="font-bold text-3xl text-sky-700 mb-2">SEMINAR NASIONAL KAFEGAMA 2024</h1>
              <p className="font-bold">MEMACU PERTUMBUHAN MENUJU INDONESIA MAJU</p>
            </div>

            <div className="mb-10">
              <div className="flex flex-row items-center text-sm mb-3">
                <StaticImage className="w-5 mr-3" src="../../images/kafegama/calendar.png" alt="calendar"/>
                <div>
                  <div>Senin, 23 September 2024</div>
                  <div>09:00 - 12:00 WIB</div>
                </div>
              </div>
              <div className="flex flex-row items-center text-sm">
                <StaticImage className="w-5 mr-3" src="../../images/kafegama/marker.png" alt="marker"/>
                <div>
                  <div>Ballroom Menara 1 BTN, Lantai 6</div>
                  <div>Jl. Gajah Mada No. 1, Jakarta Pusat</div>
                </div>
              </div>
            </div>

            <h2 className="font-bold mb-5">Welcome remarks</h2>
            <div className="flex flex-col space-y-5 mb-10">
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/friderica.png" alt="Dr. Friderica Widyasari Dewi"/>
                <div className="flex flex-col justify-center">
                  <div>Dr. Friderica Widyasari Dewi</div>
                  <p className="text-sm text-gray-400">Ketua Umum PP KAFEGAMA</p>
                </div>
              </div>
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/perry.png" alt="Perry Warjiyo, PhD."/>
                <div className="flex flex-col justify-center">
                  <div>Perry Warjiyo, PhD.</div>
                  <p className="text-sm text-gray-400">Gubernur Bank Indonesia</p>
                </div>
              </div>
            </div>

            <h2 className="font-bold mb-5">Keynote Speech</h2>
            <div className="flex flex-col space-y-5 mb-10">
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/burhanudin.png" alt="Dr. (HC) Burhanudin Abdullah"/>
                <div className="flex flex-col justify-center">
                  <div>Dr. (HC) Burhanudin Abdullah</div>
                  <p className="text-sm text-gray-400">Ketua Dewan Pakar TPN Prabowo-Gibran</p>
                </div>
              </div>
            </div>

            <h2 className="font-bold mb-5">Moderator</h2>
            <div className="flex flex-col space-y-5 mb-10">
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/edwin.png" alt="Dr. Edwin Hidayat Abdullah"/>
                <div className="flex flex-col justify-center">
                  <div>Dr. Edwin Hidayat Abdullah</div>
                  <p className="text-sm text-gray-400">Wakil Ketua Umum PP KAFEGAMA</p>
                </div>
              </div>
            </div>

            <h2 className="font-bold mb-5">Panel Discussions</h2>
            <div className="flex flex-col space-y-5">
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/erwin.png" alt="Dr. Edwin Hidayat Abdullah"/>
                <div className="flex flex-col justify-center">
                  <div>Erwin Dimas, SE, DEA, MSi</div>
                  <p className="text-sm text-gray-400">Kementrian PPN/Bappenas</p>
                </div>
              </div>
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/gumilang.png" alt="Gumilang Aryo Sahadewo, PhD."/>
                <div className="flex flex-col justify-center">
                  <div>Gumilang Aryo Sahadewo, PhD.</div>
                  <p className="text-sm text-gray-400">FEB Universitas Gajah Mada</p>
                </div>
              </div>
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/edimon.png" alt="Edimon Ginting, PhD."/>
                <div className="flex flex-col justify-center">
                  <div>Edimon Ginting, PhD.</div>
                  <p className="text-sm text-gray-400">Asian Development Bank</p>
                </div>
              </div>
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/dradjad.png" alt="Dr. Dradjad Hari Wibowo"/>
                <div className="flex flex-col justify-center">
                  <div>Dr. Dradjad Hari Wibowo</div>
                  <p className="text-sm text-gray-400">TKN Prabowo-Gibran</p>
                </div>
              </div>
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/piter.png" alt="Dr. Piter Abdullah Redjalam"/>
                <div className="flex flex-col justify-center">
                  <div>Dr. Piter Abdullah Redjalam</div>
                  <p className="text-sm text-gray-400">Segara Research Institue</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="flex-[4] bg-gray-800 px-6 lg:pl-20 py-10">
          <div className="max-w-md">
            <h2 className="text-xl font-bold mb-5 lg:mb-10">REGISTRASI</h2>
            <div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" for="name">Nama</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="name"/>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" for="email">Email</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="email"/>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" for="phone">No. HP</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="phone"/>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" for="region">Domisili</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="region"/>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" for="region">Instansi</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="region"/>
              </div>
              <div className="flex flex-col mb-5">
                <div className="text-sm text-gray-400 mb-2" for="name">Profesi</div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  <div>
                    <input id="profession-1" type="radio" name="profession" className="mr-2" />
                    <label for="profession-1" className="text-sm">Dosen</label>
                  </div>
                  <div>
                    <input id="profession-2" type="radio" name="profession" className="mr-2"/>
                    <label for="profession-2" className="text-sm">Karyawan</label>
                  </div>
                  <div>
                    <input id="profession-3" type="radio" name="profession" className="mr-2"/>
                    <label for="profession-3" className="text-sm">Pengusaha</label>
                  </div>
                  <div>
                    <input id="profession-4" type="radio" name="profession" className="mr-2"/>
                    <label for="profession-4" className="text-sm">PNS</label>
                  </div>
                  <div>
                    <input id="profession-5" type="radio" name="profession" className="mr-2"/>
                    <label for="profession-5" className="text-sm">Mahasiswa</label>
                  </div>
                  <div>
                    <input id="profession-6" type="radio" name="profession" className="mr-2"/>
                    <label for="profession-6" className="text-sm">Lainnya</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-10">
                <div className="text-sm text-gray-400 mb-2" for="name">Kehadiran</div>
                <div className="flex flex-row">
                  <div className="mr-10">
                    <input id="attendance-1" type="radio" name="attendance" className="mr-2" checked={true}/>
                    <label for="attendance-1" className="text-sm">Offline</label>
                  </div>
                  <div>
                    <input id="attendance-2" type="radio" name="attendance" className="mr-2"/>
                    <label for="attendance-2" className="text-sm">Online</label>
                  </div>
                </div>
              </div>
              <button className="bg-sky-500 w-full rounded-xl py-3 mb-3" type="button">Submit</button>
              <p className="text-sm">
                Link undangan akan dikirim ke email anda.
              </p>

              <div className="mt-10 text-sm">
                <div className="text-gray-500">Powered by</div>
                <a href="https://passioncorp.id" target="_blank" rel="noreferrer" className="inline-flex items-center">
                  <StaticImage className="w-12 mr-2" src="../../images/new-logo-color.png" alt="logo"/>
                  <span>Passion Corp Indonesia</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RegisterPage;
export const Head = () => (
  <SEO title={'Seminar Nasional KAFEGAMA 2024'}/>
)