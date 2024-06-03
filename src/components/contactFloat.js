import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ContactFloat = () => {

  return(
    <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 cursor-pointer z-50">
      <a href={`/kontakWA?redirect=${encodeURIComponent('https://wa.me/6282311000310?text=Hi%2C%20Passion%20Corp%20Indonesia%2C%20I%20know%20you%20from%20website%20https%3A%2F%2Fpassioncorp.id%2F')}`} target="_blank">
        <StaticImage className="w-16 md:w-20"
              src="../images/whatsapp.png" alt="whatsapp" />
      </a>
    </div>
  );

}
export default ContactFloat;