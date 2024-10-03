import * as React from "react";
import { useState, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import supabase from "../../components/supabaseClient";
import backgroundWelcome from "../../images/kafegama/background.jpg";


const WelcomePage = () => {

  const [regId, setRegId] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  const handleInput = async () => {

    if(loading){
      return;
    }

    try{
      const registrationId = regId.toUpperCase();

      setLoading(true);
      setName('...');
      const { data, error } = await supabase.from('participants')
        .select('*')
        .eq('reg_id', registrationId.toUpperCase());
      if(error){
        throw error;
      }
      else{
        if(data.length > 0){
          
          const { error } = await supabase.from('participants')
            .update({ registered_at: new Date().toISOString() })
            .eq('id', data[0].id);
          if(error){
            throw error;
          }
          setName(data[0].name);
        }
        else{
          setName('');
        }
      }
    }
    catch(error){
      setName('');
    }
    finally{
      setLoading(false);
      inputRef.current.value = '';
    }


  }


  return(
    <div style={{ backgroundImage: `url(${backgroundWelcome})` }} className="relative w-full h-screen bg-cover p-6 ">
      <div className="absolute left-0 top-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center p-6">
        <div className="text-5xl mb-16">Selamat Datang</div>
        <div className="font-bold text-7xl">{name}</div>
        <input ref={inputRef} autoFocus className="opacity-0"
          onChange={(e) => setRegId(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter'){
              handleInput()
            }
          }}
          onBlur={() => inputRef.current.focus()}/>
        <div className="absolute bottom-20 w-full text-center text-3xl">Terima kasih atas kehadirannya</div>
      </div>
    </div>
  );
}
export default WelcomePage;