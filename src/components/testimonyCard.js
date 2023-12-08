import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const TestimonyCard = ({words, name, title}) => (
  <div className="relative bg-white w-80 h-64 p-5 rounded-xl shadow-xl shrink-0">
    <StaticImage className="absolute bottom-0 right-0" src="../images/background-testimony.png" alt="testimony background" />
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