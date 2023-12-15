import { Box, Flex, Text, VStack, } from "@chakra-ui/react"
import Search from "./Search";
import { Cards } from "./Cards";
import Tasks from "./Tasks";


const Main = () => {
  return (
      <VStack minH={'100vh'} gap={1} maxW={{base:'100vw',lg:'lg'}}>
       <Search />
     <Box mt={{base:'-3rem'}} >
      <Box  position={'relative'} gap={3}  mt={{base:'6rem',lg:'4rem'}} >
        <h1 className="font-bold lg:text-[2rem]">Hello!  Josh</h1>
        <Text w={{base:'18rem', md:'24rem'}}>Never put off till tommorow what can be done today!</Text>
       <Box mt={4}>
        {new Date().toLocaleDateString() ? (
          <h1 className="font-bold">Today</h1>
        ) : 'Yesterday'}
       </Box>
       <Flex direction={{base:'column',lg:'row'}} gap={{lg:'12rem'}} justifyContent={'center'}  mt={{md:'3rem'}}>
        <Cards />     
         <Tasks />    
       </Flex>
      </Box>
    </Box>
  </VStack>
    
);
}

export default Main