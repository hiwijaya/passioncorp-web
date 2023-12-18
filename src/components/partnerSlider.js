import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const PartnerSlider = () => (
  <div className=" slider bg-green-300">
    <div className="slide-track">
        <div className="slide">
          <StaticImage className="w-full" src="../images/partners/abeam.png" alt="abeam" />
        </div>
        <div className="slide">
          <StaticImage className="w-full" src="../images/partners/aleza.png" alt="aleza" />
        </div>
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/brgm.png" alt="brgm" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/cbqa.png" alt="cbqa" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/cimb.png" alt="cimb" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/daikin.png" alt="daikin" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/ecoranger.png" alt="ecoranger" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/erafone.jpg" alt="erafone" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/indoin.png" alt="indoin" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/kohler.png" alt="kohler" />

        {/* <StaticImage className="slide" imgClassName="w-full" src="../images/partners/mcdonald.png" alt="mcdonald" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/msd.jpeg" alt="msd" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/pertamina.png" alt="paragon"/>
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/perumnas.jpeg" alt="perumnas"/>
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/pln.png" alt="pln" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/polri.png" alt="polri"/>
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/pupuk.png" alt="pupuk" />
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/sunenergy.jpeg" alt="sun energy"/>
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/tni.png" alt="tni"/>
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/transmedia.png" alt="transmedia"/>
        <StaticImage className="slide" imgClassName="w-full" src="../images/partners/vertiv.png" alt="vertiv" /> */}

      </div>
  </div>
)
export default PartnerSlider