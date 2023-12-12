import { Box, Button, Checkbox, Flex, Input } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { FaTrashAlt} from "react-icons/fa";
import axios from 'axios'

const Tasks = () => {
  const [task, setTask] = useState()
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/list')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  }, [])

  const handleSubmit = () => {
    axios.post('http://localhost:4000/add', {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <Box minH={'90vh'} mt={3} >
      <Flex gap={4} alignItems={'center'} direction={'column'} maxW={'lg'}>
      <h1 className="font-semibold">Whatsup for today pal</h1>
      <form>
       <Flex gap={3} alignItems={'center'}>
       <Input type="text" w={{lg:'16rem'}} onChange={(e) =>setTask(e.target.value)} />
        <Button w={{base:'4rem',lg:'3rem'}} h={'2rem'} fontSize={'12px'} bg={"blue.600"} _hover={''} color={'white'} className="hover:opacity-70" onClick={handleSubmit}>Add list</Button>
       </Flex>
      </form>

        {
          todos.length === 0 ? 
          <div>
            <p className="text-[12px] font-bold">Are you free today</p>
          </div>
          :
          todos.map((todo, index) => (
          <Flex key={index} gap={3}>
          <Checkbox />
          <Box>{todo}
          <Button onClick={()=>handleDelete(index)}>
            <FaTrashAlt />
          </Button>
          </Box>
          </Flex>
        ))}
  
      </Flex>
    </Box>
  )
}

export default Tasks