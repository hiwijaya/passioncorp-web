import * as React from "react";
import { useState } from "react";
import supabase from "../../components/supabaseClient";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../../components/seo";


const RegisterPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [institute, setInstitute] = useState('');
  const [profession, setProfession] = useState('');
  const [attendance, setAttendance] = useState('Online');

  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [onSubmit, setOnSubmit] = useState(false);


  const modal = () => (
    <div className="fixed flex flex-col items-center px-6 py-20 w-full h-screen bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-xl w-full max-w-sm px-6 pt-10 pb-6">
        <div className="mb-10">
          {message}
        </div>
        <button className="bg-sky-500 w-full rounded-xl py-3 text-white" type="button" 
          onClick={() => setShowModal(false)}>Tutup</button>
      </div>
    </div>
  );

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validatePhone = (phone) => {
    const pattern = /^08\d{8,11}$/;
    return pattern.test(phone);
  };

  const showMessage = (message) => {
    setMessage(message);
    setShowModal(true);
  }

  const generateRegId = () => {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomLetters = '';
    for (let i = 0; i < 3; i++) {
      randomLetters += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    const randomNumber = Math.floor(100000 + Math.random() * 900000);

    return `${randomLetters}-${randomNumber}`;
  }

  const resetFields = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
    setInstitute('');
    setProfession('');
    setAttendance('Offline');
  }

  const submitRegistration = async () => {

    if(onSubmit) return;

    if(name === ''){
      showMessage('Nama harus diisi');
      return;
    }
    if(email === ''){
      showMessage('Email harus diisi');
      return;
    }
    if(!validateEmail(email)){
      showMessage('Format email tidak sesuai');
      return;
    }
    if(phone === ''){
      showMessage('No HP harus diisi');
      return;
    }
    if(!validatePhone(phone)){
      showMessage('Format nomor HP tidak sesuai (08***)');
      return;
    }
    if(city === ''){
      showMessage('Domisili harus diisi');
      return;
    }
    if(institute === ''){
      showMessage('Institusi harus diisi');
      return;
    }
    if(profession === ''){
      showMessage('Profesi harus diisi');
      return;
    }
    if(attendance === ''){
      showMessage('Kehadian harus diisi');
      return;
    }

    const regId = generateRegId();

    try{
      setOnSubmit(true);

      const { data, errorGet } = await supabase.from('participants')
        .select('*')
        .eq('email', email.toLowerCase());
      if(errorGet){
        throw errorGet;
      }
      else{
        console.log(data);
        if(data.length > 0){
          showMessage('Email sudah terdaftar. Silakan cek email anda.');
          return;
        }
      }


      const { error } = await supabase.from('participants')
        .insert([{
          reg_id: regId,
          name: name,
          email: email.toLowerCase(),
          phone: phone,
          institute: institute,
          profession: profession,
          city: city,
          attendance: attendance
        }]);
      
      if(error){
        throw error;
      }
      else {
        showMessage('Registrasi berhasil. Link undangan akan dikirim ke email anda.');
        resetFields();
      }
    }
    catch(error){
      showMessage('Terjadi kesalahan. Mohon coba beberapa saat lagi.');
    }
    finally{
      setOnSubmit(false);
    }
  }


  return (
    <div className="w-full">
      {showModal && modal()}
      <div className="flex flex-col lg:flex-row h-full text-white text-base overflow-y-auto">
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
                  <div>Sabtu, 14 Desember 2024</div>
                  <div>12:00 - 17:00 WIB</div>
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

            <h2 className="font-bold mb-5">Opening remarks</h2>
            <div className="flex flex-col space-y-5 mb-10">
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/perry.png" alt="Perry Warjiyo, PhD."/>
                <div className="flex flex-col justify-center">
                  <div>Perry Warjiyo, PhD.</div>
                  <p className="text-sm text-gray-400">Gubernur Bank Indonesia</p>
                </div>
              </div>
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/friderica.png" alt="Dr. Friderica Widyasari Dewi"/>
                <div className="flex flex-col justify-center">
                  <div>Dr. Friderica Widyasari Dewi</div>
                  <p className="text-sm text-gray-400">Ketua Umum PP KAFEGAMA</p>
                </div>
              </div>
            </div>

            <h2 className="font-bold mb-5">Welcome Remark</h2>
            <div className="flex flex-col space-y-5 mb-10">
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/nixon.png" alt="Nixon L.P Napitupulu"/>
                <div className="flex flex-col justify-center">
                  <div>Nixon L.P Napitupulu</div>
                  <p className="text-sm text-gray-400">Direktur Utama BTN</p>
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
            <div className="flex flex-col space-y-5 mb-10" >
              <div className="inline-flex flex-row">
                <StaticImage className="w-12 mr-5 rounded-full" src="../../images/kafegama/eka.png" alt="Eka Chandra Buana"/>
                <div className="flex flex-col justify-center">
                  <div>Eka Chandra Buana</div>
                  <p className="w-full max-w-md text-sm text-gray-400">Kementerian PPN/Bappenas</p>
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
            </div>

            <h2 className="font-bold mb-5">Moderator</h2>
            <div className="flex flex-col space-y-5">
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
            <h2 className="text-xl font-bold mb-5 lg:mb-5">REGISTRASI</h2>
            <div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" htmlFor="name">Nama</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="name" value={name}
                  onChange={e => setName(e.target.value)}/>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" htmlFor="email">Email</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="email" value={email}
                  onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" htmlFor="phone">No. HP</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="phone" placeholder="08xxxxxxxxxx" value={phone}
                  onChange={e => setPhone(e.target.value)}/>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" htmlFor="region">Domisili</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="region" value={city}
                  onChange={e => setCity(e.target.value)}/>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-sm text-gray-400 mb-2" htmlFor="region">Instansi</label>
                <input className="bg-transparent border-2 p-3 rounded-xl border-gray-500" id="region" value={institute}
                  onChange={e => setInstitute(e.target.value)}/>
              </div>
              <div className="flex flex-col mb-5">
                <div className="text-sm text-gray-400 mb-2" htmlFor="name">Profesi</div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  <div>
                    <input id="profession-1" type="radio" name="profession" className="mr-2"
                      value="Dosen" checked={profession === 'Dosen'} 
                      onChange={(e) => setProfession(e.target.value)}/>
                    <label htmlFor="profession-1" className="text-sm">Dosen</label>
                  </div>
                  <div>
                    <input id="profession-2" type="radio" name="profession" className="mr-2"
                      value="Karyawan" checked={profession === 'Karyawan'} 
                      onChange={(e) => setProfession(e.target.value)}/>
                    <label htmlFor="profession-2" className="text-sm">Karyawan</label>
                  </div>
                  <div>
                    <input id="profession-3" type="radio" name="profession" className="mr-2"
                      value="Pengusaha" checked={profession === 'Pengusaha'} 
                      onChange={(e) => setProfession(e.target.value)}/>
                    <label htmlFor="profession-3" className="text-sm">Pengusaha</label>
                  </div>
                  <div>
                    <input id="profession-4" type="radio" name="profession" className="mr-2"
                      value="PNS" checked={profession === 'PNS'} 
                      onChange={(e) => setProfession(e.target.value)}/>
                    <label htmlFor="profession-4" className="text-sm">PNS</label>
                  </div>
                  <div>
                    <input id="profession-5" type="radio" name="profession" className="mr-2"
                      value="Mahasiswa" checked={profession === 'Mahasiswa'} 
                      onChange={(e) => setProfession(e.target.value)}/>
                    <label htmlFor="profession-5" className="text-sm">Mahasiswa</label>
                  </div>
                  <div>
                    <input id="profession-6" type="radio" name="profession" className="mr-2"
                      value="Lainnya" checked={profession === 'Lainnya'} 
                      onChange={(e) => setProfession(e.target.value)}/>
                    <label htmlFor="profession-6" className="text-sm">Lainnya</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-10">
                <div className="text-sm text-gray-400 mb-2" htmlFor="name">Kehadiran</div>
                <div className="flex flex-row">
                  <div className="mr-10">
                    <input id="attendance-1" type="radio" name="attendance" className="mr-2" disabled
                      value="Offline" checked={attendance === 'Offline'} />
                    <label htmlFor="attendance-1" className="text-sm text-gray-500">Offline</label>
                  </div>
                  <div>
                    <input id="attendance-2" type="radio" name="attendance" className="mr-2"
                      value="Online" checked={attendance === 'Online'} 
                      onChange={(e) => setAttendance(e.target.value)}/>
                    <label htmlFor="attendance-2" className="text-sm">Online <span className="text-gray-400">(Zoom Meeting)</span> </label>
                  </div>
                </div>
              </div>
              <button className="bg-sky-500 w-full rounded-xl py-3 mb-3 font-bold" type="button"
                onClick={() => submitRegistration()}>{onSubmit ? 'Mengirim data..' : 'Submit'}</button>
              <p className="text-xs sm:text-sm">
                Link undangan akan dikirim ke email anda.
              </p>

              <div className="mt-16 text-sm">
                <div className="text-gray-500">Powered by</div>
                <a href="https://passioncorp.id" target="_blank" rel="noreferrer" className="inline-flex items-center">
                  <StaticImage className="w-12 mr-2" src="../../images/new-logo-color.png" alt="logo"/>
                  <span>Passion Corp Indonesia</span>
                </a>
              </div>
              <div className="mt-5 text-sm text-gray-500">© 2024 All right reserved.</div>
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