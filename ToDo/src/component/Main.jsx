import { Box, Text, VStack, } from "@chakra-ui/react"
import Search from "./Search";
import { Cards } from "./Cards";
import Tasks from "./Tasks";


const Main = () => {
  return (
      <VStack gap={4}>
       <Search />
     <Box maxW={'lg'} className="max-w-[1640px]" >
      <Box  position={'relative'} gap={3} left={{base:'-4rem',lg:'4rem'}} mt={{base:'6rem',lg:'4rem'}} >
        <h1 className="font-bold lg:text-[2rem]">Hello!  Josh</h1>
        <Text w={{base:'18rem', md:'24rem'}}>Never put off till tommorow what can be done today!</Text>
       <Box mt={4}>
        {new Date().toLocaleDateString() ? (
          <h1 className="font-bold">Today</h1>
        ) : ''}
       </Box>
       <div>
        <Cards />
       </div>
       <div>
         <Tasks />    
        </div>
      </Box>
    </Box>
  </VStack>
    
);
}

export default Main