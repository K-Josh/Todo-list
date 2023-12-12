import Main from "./component/Main"
import './App.css'
import Sidebar from "./component/SideBar"
import { Container, Flex, HStack, } from "@chakra-ui/react"

const App = () => {
  return (
    <Container maxW={'lg'} >
     <HStack alignItems={'flex-start'} justifyContent={'flex-end'}>
      <Flex>
        <Sidebar />
          <Main />
      </Flex>
     </HStack>
    </Container>
  )
}

export default App