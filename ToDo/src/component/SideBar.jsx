import './Sidebar.css'
import { SidebarData } from '../Data/Data'
import { useState } from 'react'
import {FaBarsStaggered} from 'react-icons/fa6'
import { IoClose } from "react-icons/io5";
import {motion} from 'framer-motion'
import { Box, Stack, } from '@chakra-ui/react'

const Sidebar = () => {
    const [selected, setSelected] = useState(0)
    const [isopen, setIsopen] = useState(false)

    const sidebarVariants = {
        true:{
            left:'0'
        },
        false:{
            left:'-3.75rem'
        }
    }
  return (
    <>
     <Stack minH={'100vh'} className='h-screen' direction={'column'}>

     {/* overlay */}
     {isopen ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

       <Box maxW={'lg'}>
       <div className={` fixed rounded-lg left-[1rem] lg:left-[1rem] top-[1rem] lg:top-[1rem] gap-2 bg-blue-400 p-[10px] transition-all duration-500 ease-in-out cursor-pointer hover:opacity-80 ${isopen ? 'right-[1rem] w-[7rem] z-[40]' : 'right-[7rem] w-[2.5rem] z-10'}` }
        onClick={()=>setIsopen(!isopen)}>
        {!isopen ? <FaBarsStaggered className='text-white'/> : <IoClose className='text-white' />  }
        </div>
        <motion.div
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${isopen}`:`${!isopen}`}
        className={`flex relative flex-col  transition-all duration-500 ease-in-out bg-blue-600 rounded-xl h-screen p-4 lg:p-3 lg:fixed z-[9] ${isopen ? 'z-10 w-full ml-[6rem] lg:ml-[-3rem] lg:w-[20rem]' : ' lg:left-[-5rem] lg:ml-[-3rem] ml-[-6rem] opacity-0'} `}
        >
          <div className='flex flex-col gap-[2rem] '>
            {SidebarData.map((item, index)=>{
                return(
                    <div className={`${selected === index ? 'flex gap-[2rem] items-center h-[2.5rem] ml-[1rem] relative transition-all duration-400 ease-in text-[14px] active' : 'flex gap-[1rem] items-center h-[3.5rem] ml-[2rem] relative transition-all duration-400 ease-in text-[14px]'} cursor-pointer lg:top-[5rem] top-[3rem] lg:left-[2rem] rounded-lg`} key={index} onClick={()=>setSelected(index)}>
                        <item.icon className={`${!isopen ? 'relative lg:left-0' : 'lg:ml-[5rem]'} text-white text-[1rem] transition-all duration-300 ease-out `}/>
                        <span className={`text-white ${selected === index ? 'lg:inline-flex ' : ' lg:inline-flex lg:opacity-100'} transition-all duration-300 ease-out text-[12px]`}>{item.heading}</span>
                    </div>
                )
            })}
            </div>
        
        </motion.div>
       </Box>
     </Stack>
   </>
  )
}

export default Sidebar