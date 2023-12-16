import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { PauseButton, PlayButton, SettingSButton } from "./Button";
import {Flex, Box} from '@chakra-ui/react'

  const blue = '#1E88E5';
const Timer = () => {
  return (
    <div>
        <Flex alignItems={'center'} gap={3}>
        <Box w={100} h={100}>
        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
        rotation: 0.25, 
        strokeLinecap: 'butt',
        textSize: '16px',
        pathTransitionDuration: '0.5',
        pathColor: blue,
        textColor: '#fff',
        trailColor:'rgba(255,255,255,.2)'
       })}/>
       </Box>
       <Flex gap={2}>
         <PlayButton />
         <PauseButton />
        <SettingSButton />
       </Flex>
       </Flex>
    </div>
  )
}

export default Timer