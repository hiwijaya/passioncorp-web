import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "@reach/router";
import { StaticImage } from "gatsby-plugin-image";
import supabase from "../../components/supabaseClient";
import QRCode from "react-qr-code";
import SEO from "../../components/seo";

const QRCodePage = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [regId, setRegId] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(true);

  const ticketRef = useRef(null);

  useEffect(async () => {
    const registrationId = queryParams.get('reg_id');

    try{

      setLoading(true);
      const { data, error } = await supabase.from('participants')
        .select('*')
        .eq('reg_id', registrationId.toUpperCase());
      if(error){
        throw error;
      }
      else{
        if(data.length > 0){
          setRegId(data[0].reg_id);
          setIsValid(true);
        }
        else{
          setIsValid(false);
        }
      }
    }
    catch(error){
      setIsValid(false);
    }
    finally{
      setLoading(false);
    }
  },[]);

  const ticketSection = () => {
    if(loading){
      return (<div>Loading..</div>);
    }
    else{
      if(!isValid){
        return (<div>Invitation not found.</div>);
      }
      else {
        return(
          <div className="w-full max-w-sm rounded-xl bg-white text-sm" ref={ticketRef}>
            <div className="flex flex-row p-6 space-x-4">
              <div className="flex-1 space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Event</div>
                  <div className="font-bold text-sky-500">Seminar Nasional KAFEGAMA 2024</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Date</div>
                  <div className="text-black"> 23 September 08:00 WIB</div>
                </div>
              </div>
              <div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Reg ID</div>
                  <div className="font-bold text-black">{regId}</div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border-t-4 border-dashed border-gray-200 w-full"></div>
            </div>
            <div className="p-6 pb-2">
              <div className="text-xs text-gray-500 mb-1">QR Code</div>
              <div className="p-6">
                <QRCode value={regId} 
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
              </div>
              <div className="flex flex-row items-center justify-end text-xs text-gray-400">
                <StaticImage className="w-6 mr-1" src="../../images/new-logo-color.png" alt="logo"/>
                <span>Passion Corp Indonesia</span>
              </div>
            </div>
          </div>
        );
      }
    }
  }

  return(
    <div className="w-full h-screen bg-slate-200 p-6">
      { ticketSection()}
    </div>
  );

}
export default QRCodePage;
export const Head = () => (
  <SEO title={'Seminar Nasional KAFEGAMA 2024'}/>
)