import { Box, Button, Flex, Input } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { FaTrashAlt} from "react-icons/fa";
import { MdCheckBox, MdEditNote } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import axios from 'axios'

const Tasks = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([]);

  const handleEdit = (id) => {
    axios.put('http://localhost:4000/update/'+id)
    .then(result => {
      location.reload(result)
    })
    .catch(err => console.log(err))
  }
  
  const handleDelete = (id) => {
    axios.delete('http://localhost:4000/delete/'+id)
    .then(() => {
      location.reload()
    })
    .catch(err => console.log(err))
  }

  const handleSubmit = () => {
    axios.post('http://localhost:4000/', {task:task})
    .then(result => {
      location.reload(result)    
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('http://localhost:4000/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <Box minH={'90vh'} mt={3} >
      <Flex gap={4} alignItems={'center'} direction={'column'} maxW={'lg'}>
      <h1 className="font-semibold">Whatsup for today pal</h1>
      <form>
       <Flex gap={3} alignItems={'center'}>
       <Input type="text" w={{lg:'16rem'}} value={task} onChange={(e) =>setTask(e.target.value)} className="cursor-pointer" />
        <Button w={{base:'4rem',lg:'3rem'}} h={'2rem'} fontSize={'12px'} bg={"blue.600"} _hover={''} color={'white'} className="hover:opacity-70" onClick={handleSubmit}>Add list</Button>
       </Flex>
      </form>

        {
          todos.length === 0 
          ? 
          <div>
            <p className="text-[12px] font-bold">Are you free today</p>
          </div>
          :
          todos.map((todo, index) => (
        <Flex key={index}  gap={3}>
         <Flex justifyContent={'space-between'} w={'15rem'} alignItems={'center'} bg={'whitesmoke'} p={2} className="space-x-[1rem] rounded-lg">
          <div className="flex space-x-4">
           {todo.done ? 
           <MdCheckBox className="cursor-pointer"/>
           :
           <MdOutlineCheckBoxOutlineBlank className="cursor-pointer"/>
           }
          <Box  className="flex items-center  cursor-pointer ">
          <p className={`${todo.done ? 'line-through' : ''} whitespace-nowrap text-[0.8rem] font-semibold`}>{todo.task}</p>
          </Box>
          </div>
         <Flex alignItems={'center'} gap={2}>
          <MdEditNote onClick={() => handleEdit(todo._id)} className="text-blue-600 text-[1.5rem] cursor-pointer"/>
            <FaTrashAlt onClick={()=>handleDelete(todo._id)} className="cursor-pointer text-red-600"/>
         </Flex>
         </Flex>
          </Flex>
        ))}
  
      </Flex>
    </Box>
  )
}

export default Tasks