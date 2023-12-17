import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const TestimonyCard = ({words, name, title}) => (
  <div className="relative bg-white w-[300px] h-[270px] p-5 rounded-xl shrink-0">
    <StaticImage className="absolute bottom-0 right-0 w-2/3" src="../images/background-testimony.png" alt="testimony background" />
    <div className="flex flex-col justify-between relative text-sm text-gray-500 h-full">
      <p className="mb-5 line-clamp-[7]">{words}</p>
      <div>
        <div className="font-bold">{name}</div>
        <div className="truncate">{title}</div>
      </div>
    </div>
  </div>
)
export default TestimonyCard