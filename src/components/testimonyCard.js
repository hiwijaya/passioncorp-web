import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const TestimonyCard = ({words, name, title}) => (
  <div className="relative flex justify-end items-end bg-white w-[250px] sm:w-[300px] h-[330px] sm:h-[300px] rounded-xl shrink-0">
    
    <StaticImage className="w-2/3" src="../images/background-testimony.png" alt="testimony background" />
    
    <div className="absolute left-0 top-0 flex flex-col justify-between text-sm text-gray-500 h-full p-4 sm:p-5 ">
      <p className="mb-5 line-clamp-[10]">{words}</p>
      <div>
        <div className="font-bold">{name}</div>
        <div >{title}</div>
      </div>
    </div>
  </div>
)
export default TestimonyCard