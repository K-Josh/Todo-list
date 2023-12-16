import { Box } from "@chakra-ui/react"
import ReactSlider from 'react-slider'

const Settings = () => {
  return (
    <Box gap={1} className="flex flex-col">
      <label>Task Minutes:</label>
        <ReactSlider 
            className="h-[40px] border-[2px] rounded-3xl border-red-400"
            thumbClassName={'cursor-pointer w-[36px] h-[36px] bg-red-400 rounded-full border-0'}
            trackClassName={'track'}
            value={45}
            min={1}
            max={120}
        />
      <label>Break Minutes:</label>
       <ReactSlider 
            className="h-[40px] border-[2px] rounded-3xl border-green-400"
            thumbClassName={'cursor-pointer w-[36px] h-[36px] bg-green-400 rounded-full border-0'}
            trackClassName={'track'}
            value={45}
            min={1}
            max={120}
        />
    </Box>
  )
}

export default Settings