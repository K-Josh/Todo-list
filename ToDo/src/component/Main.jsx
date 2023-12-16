import { Box, Flex, Text, VStack, } from "@chakra-ui/react"
import Search from "./Search";
import { Cards } from "./Cards";
import Tasks from "./Tasks";


const Main = () => {
  return (
      <VStack minH={'90vh'} gap={1}>
       <Search />
     <Box alignItems={'center'} maxWidth={'xl'} mt={{base:'-3rem'}}>
      <Box position={'relative'} gap={3}  mt={{base:'6rem',lg:'4rem'}} >
        <h1 className="font-bold lg:text-[2rem]">Hello!  Josh</h1>
        <Text w={{base:'18rem', md:'24rem'}}>Never put off till tommorow what can be done today!</Text>
       <Box mt={4}>
        {new Date().toLocaleDateString() ? (
          <h1 className="font-bold">Today</h1>
        ) : 'Yesterday'}
       </Box>
       <Flex direction={{base:'column',lg:'row'}}  justifyContent={'center'}  mt={{}}>
        <Cards />     
         <Tasks />    
       </Flex>
      </Box>
    </Box>
  </VStack>
    
);
}

export default Main