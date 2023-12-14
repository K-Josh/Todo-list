import { Flex, Box, Input, Avatar } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Search = () => {
  return (
    <Flex position={'relative'}>
    <Flex ml={{base:'7rem',md:'16rem',lg:'35rem'}} className={` transition-all duration-500 ease-out `} gap={'2rem'} maxW={'lg'} mt={{base:'1rem',lg:'2rem'}}>
 <Box className="flex md:space-x-[5rem]" >
   <Box className={`inline-flex items-center`}>
    <Input placeholder='search' rounded={'2xl'} w={{base:'7rem',lg:'12rem'}} type="text" size='md' className=" p-2 md:w-[12rem] placeholder:p-1 h-[2rem] cursor-pointer bg-slate-200">
   </Input>
   <span className="relative right-7 "><FaSearch className="text-blue-600" /></span>
    </Box>
   <Flex alignItems={'center'} gap={3}>
    <IoMdSettings className="animate-spin"/>
    <Avatar className="rounded-full bg-blue-600 text-white text-[12px]" size='sm' bg={'blue.400'} name='Kirin Adeola' />
   </Flex>
    </Box>
   </Flex>

 </Flex>
  )
}

export default Search