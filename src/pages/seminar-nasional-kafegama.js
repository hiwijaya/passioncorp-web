import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";


const RegisterPage = () => {

  return (
    <div className="w-full">
      <div className="flex flex-row h-full text-white overflow-y-auto">
        <div className="flex flex-col items-end flex-[5] bg-gray-900 py-10">
          <div className="w-full max-w-2xl">
            <StaticImage className="w-24 mb-5" src="../images/kafegama/kafegama-logo.png" alt="logo KAFEGAMA"/>
            <div className="mb-10">
              <h1 className="font-bold text-3xl text-sky-700">SEMINAR NASIONAL KAFEGAMA 2024</h1>
              <p className="font-bold">MEMACU PERTUMBUHAN MENUJU INDONESIA MAJU</p>
            </div>

            <div className="mb-10">
              <div className="flex flex-row items-center text-sm mb-3">
                <StaticImage className="w-5 mr-3" src="../images/kafegama/calendar.png" alt="calendar"/>
                <div>
                  <div>Senin, 23 September 2024</div>
                  <div>09:00 - 12:00 WIB</div>
                </div>
              </div>
              <div className="flex flex-row items-center text-sm">
                <StaticImage className="w-5 mr-3" src="../images/kafegama/marker.png" alt="marker"/>
                <div>
                  <div>Auditorium Menara BTN</div>
                  <div>Gajah Mada, Jakarta</div>
                </div>
              </div>
            </div>

            <h2 className="font-bold mb-5">Rundown Acara:</h2>
            <div>
              <div className="flex flex-row">
                <div className="ml-5">
                  <ul className="list-disc">
                    <li className="mb-3">
                      <div className="font-bold">08:00 - 09:00</div>
                      <div className="text-sm text-gray-400">Registrasi peserta Seminar Nasional KAFEGAMA 2024</div>
                    </li>
                    <li className="mb-3">
                      <div className="font-bold">09:00 - 09:10</div>
                      <div className="text-sm text-gray-400">Pembukaan oleh MC</div>
                    </li>
                    <li className="mb-3">
                      <div className="font-bold">09:10 - 09:20</div>
                      <div className="text-sm text-gray-400">Lagu Indonesia Raya dan Hymne UGM</div>
                    </li>
                    <li className="mb-3">
                      <div className="font-bold">09:20 - 09:35</div>
                      <div className="text-sm text-gray-400">Sambutan Ketua Umum KAFEGAMA (Ibu Dr. Friderica Widyasari Dewi, SE, MBA)</div>
                    </li>
                    <li className="mb-3">
                      <div className="font-bold">09:35 - 09:45</div>
                      <div className="text-sm text-gray-400">Sambutan Gubernur Bank Indonesia (Bapak Perry Warjiyo, SE, MSC, PhD)</div>
                    </li>
                    <li className="mb-3">
                      <div className="font-bold">09:45 - 10:30</div>
                      <div className="text-sm text-gray-400">Keynote Speech oleh Bapak Dr. (HC) Ir. Burhanudin Abdullah, MA</div>
                      <div className="text-sm text-gray-400">Moderator oleh Bapak Dr. Edwin Hidayat Abdullah</div>
                    </li>
                    <li className="mb-3">
                      <div className="font-bold">10:30 - 11:45</div>
                      <div className="text-sm text-gray-400">Panel Discussions:</div>
                      <ol className="ml-5 list-decimal text-sm text-gray-400">
                        <li>Erwin Dimas, SE, DEA, MSi - Kementrian PPN/Bappenas</li>
                        <li>Gumilang Aryo Sahadewo, Ph.D. - FEB Universitas Gajah Mada</li>
                        <li>Edimon Ginting, Ph.D. - Asian Development Bank</li>
                        <li>Dr. Dradjad Hari Wibowo - Anggota Dewan Pakar TKN Prabowo-Gibran</li>
                      </ol>
                      <div className="text-sm text-gray-400">Moderator Oleh Bapak Dr. Peter Abdullah Radjalam - Segara Research Institue</div>
                    </li>
                    <li className="mb-3">
                      <div className="font-bold">11:45 - 11:55</div>
                      <div className="text-sm text-gray-400">Doorprize</div>
                    </li>
                    <li className="mb-3">
                      <div className="font-bold">11:55 - 12:00</div>
                      <div className="text-sm text-gray-400">Penutupan oleh MC</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="flex-[4] bg-gray-800 pt-20 pb-10 pl-20">
          <div className="w-full max-w-lg">
            <h2 className="text-xl font-bold mb-10">REGISTRASI</h2>
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
                <div className="grid grid-cols-4">
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
                Undangan akan dikirim ke email anda.
              </p>

              <div className="mt-10 text-sm">
                <div className="text-gray-500">Powered by</div>
                <a href="https://passioncorp.id" target="_blank" rel="noreferrer" className="inline-flex items-center">
                  <StaticImage className="w-12 mr-2" src="../images/new-logo-color.png" alt="logo"/>
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