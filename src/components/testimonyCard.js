import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const TestimonyCard = ({words, name, title}) => (
  <div className="relative bg-white w-[250px] sm:w-[300px] p-4 sm:p-5 rounded-xl shrink-0">
    <div className="relative flex flex-col justify-between text-sm text-gray-500 shrink-0 h-full z-10">
      <p className="mb-5 line-clamp-[10]">{words}</p>
      <div>
        <div className="font-bold">{name}</div>
        <div >{title}</div>
      </div>
    </div>
    <StaticImage className="absolute bottom-0 right-0 w-2/3 z-0" src="../images/background-testimony.png" alt="testimony background" />
  </div>
)
export default TestimonyCard