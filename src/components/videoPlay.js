import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"


const VideoPlay = ({title = '', thumbnail = '', link}) => {

  const [showPlayer, setShowPlayer] = useState(false)

  const player = () => (
    <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="flex flex-col w-full max-w-[900px] h-full max-h-[600px] bg-white p-5 rounded-xl">
        <div className="flex flex-row items-center justify-between mb-5">
          <div className="font-bold">{title}</div>
          <div className="p-3 bg-slate-200 rounded-full cursor-pointer" role="button" 
            onClick={() => setShowPlayer(prevState => !prevState)}>
            <StaticImage className="w-6" src="../images/icon-close-big.png" alt="close"/>
          </div>
        </div>
        { 
          !link ? <div>Loading...</div> :
          <iframe className="h-full" src={link} referrerpolicy="no-referrer-when-downgrade"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        }
      </div>
    </div>
  )

  return (
    <div className="flex flex-col bg-white w-full max-w-[350px] h-[250px] shadow-xl rounded-2xl overflow-hidden shrink-0">
      {showPlayer && player()}
      <img className="w-full h-[160px] object-cover" src={thumbnail} alt="event" />
      <div className="relative flex justify-center items-center flex-1 ">
        <div className="absolute -top-7 right-5 bg-white w-14 h-14 flex justify-center items-center rounded-full shadow-xl cursor-pointer " role="button"
          onClick={() => setShowPlayer(prevState => !prevState)}>
          <StaticImage className="w-5" src="../images/icon-play.png" alt="play" />
        </div>
        <div className="text-sm font-bold mx-5 text-center">
          {title}
        </div>
      </div>
    </div>
  )
}
export default VideoPlay