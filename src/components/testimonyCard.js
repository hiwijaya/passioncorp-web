import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const TestimonyCard = ({words, name, title}) => (
  <div className="relative bg-white w-[250px] sm:w-[300px] p-4 sm:p-5 rounded-xl shrink-0">
    <StaticImage className="absolute bottom-0 right-0 z-0 w-2/3" src="../images/background-testimony.png" alt="testimony background" />
    <div className="relative flex flex-col justify-between text-sm text-gray-500 shrink-0 h-[270px] z-10">
      <p className="mb-5 line-clamp-[10]">{words}</p>
      <div>
        <div className="font-bold">{name}</div>
        <div >{title}</div>
      </div>
    </div>
  </div>
)
export default TestimonyCard