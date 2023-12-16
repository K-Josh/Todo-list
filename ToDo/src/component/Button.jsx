import { FaPauseCircle, FaPlayCircle } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"

export const PlayButton = () => {
  return (
    <div>
      <FaPlayCircle className="cursor-pointer text-[2rem]"/>
    </div>
  )
}

export const PauseButton = () => {
  return (
    <div>
      <FaPauseCircle className="cursor-pointer text-[2rem]"/>
    </div>
  )
}

export const SettingSButton = () => {
  return (
    <div>
      <IoMdSettings className="cursor-pointer text-[2rem]"/>
    </div>
  )
}