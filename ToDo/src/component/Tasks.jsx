import { Box, Button, Checkbox, Flex, Input } from "@chakra-ui/react"
import { useState } from "react"
import { FaBitbucket} from "react-icons/fa";


const Tasks = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
  }
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <Box minH={'90vh'}>
      <Flex direction={'column'} maxW={'lg'}>
      <h1 className="font-semibold">Whatsup for today pal</h1>
      <form>
       <Flex gap={3} alignItems={'center'}>
       <Input type="text" w={{lg:'16rem'}} value={inputValue} onChange={handleChange} />
        <Button w={{lg:'3rem'}} h={{lg:'2rem'}} fontSize={{lg:'12px'}} bg={"blue.600"} _hover={''} color={'white'} className="hover:opacity-70" onClick={handleSubmit}>Add list</Button>
       </Flex>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Flex key={index} gap={3}>
          <Checkbox />
          <li>{todo}
          <Button onClick={()=>handleDelete(index)}>
            <FaBitbucket />
          </Button>
          </li>
          </Flex>
        ))}
      </ul>
      </Flex>
    </Box>
  )
}

export default Tasks