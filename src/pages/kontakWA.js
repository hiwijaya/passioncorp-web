import * as React from "react";
import { useEffect } from "react";
import { navigate } from "gatsby";


const KontakWAPage = () => {

  useEffect(() => {

    if(typeof window !== 'undefined'){
      const urlParams = new URLSearchParams(window.location.search);
      if(urlParams.has('redirect')){
        navigate(urlParams.get('redirect'));
      }
      else{
        navigate('/');
      }
    }

  }, []);


  return (
    <div>Redirecting..</div>
  );
}
export default KontakWAPage;