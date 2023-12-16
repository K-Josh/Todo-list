import { Box, Button, Flex, Input, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Tooltip } from "@chakra-ui/react"
import { useState, useEffect, useRef } from "react"
import { FaTrashAlt} from "react-icons/fa";
import { MdCheckBox, MdEditNote } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank, MdAccessTime } from "react-icons/md";
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast';
import Timer from "./Timer";
import Settings from "./Settings";

const Tasks = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([]);


  const handleEdit = (id) => {
    axios.put('http://localhost:4000/update/'+id)
    .then(result => {
      toast('Task completed You Rock!', {
        icon: '😀',
        duration: '7000'
      })
      setTimeout(()=> {
        location.reload(result)
      }, 4000)
  })
    .catch(err => console.log(err))
  }
  
  const handleDelete = (id) => {
    axios.delete('http://localhost:4000/delete/'+id)
    .then(() => {
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('Task Deleted');
          }, 5000);
        }),
        {
          pending: 'Deleting...',
          success: <b>Task Deleted</b>,
        }
      );
        setTimeout(()=> {
          location.reload()
        }, 7000)
    })
    .catch(err => {
      console.log(err);
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('Task Deleted');
          }, 5000);
        }),
        {
          pending: 'Deleting...',
          error: <b>Task could not be Deleted</b>,
        }
      );
    })
  }

  const handleSubmit = () => {
    axios.post('http://localhost:4000/', {task:task})
    .then(result => {
      toast.success('Your Tasks Rock🔥', {
        duration: '9000'
      })    
      setTimeout(()=> {
        location.reload(result)
      }, 7000)
    })
    .catch(err => { 
      toast.error('Task failed to add🙁', {
        duration: '7000'
      })
      console.log(err);
  })
  }

  useEffect(() => {
    axios.get('http://localhost:4000/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  }, [])

  const initialFocusRef = useRef()
  const [showSettings, setShowSettings] = useState(true)

  return (
    <Box ml={{lg:'9rem'}} mt={{base:'-9rem',md:'1rem',lg:3}} >
      <Flex gap={4} alignItems={'center'} direction={'column'}>
      <h1 className="font-semibold">Whatsup for today pal 🔥</h1>
      <form>
       <Flex gap={3} alignItems={'center'}>
        <Input autoComplete="on" type="text" w={{lg:'16rem'}} value={task} onChange={(e) =>setTask(e.target.value)} className="cursor-pointer" isRequired/>
        <Button type="submit" w={{base:'4rem',lg:'3rem'}} h={'2rem'} fontSize={'12px'} bg={"blue.600"} _hover={''} color={'white'} className="hover:opacity-70" onClick={handleSubmit} isDisabled={task?false:true}>Add list</Button>
       </Flex>
      </form>

        {todos.length === 0 
          ? 
          <div>
            <p className="text-[12px] font-bold">Are you free today? if not get it DONE 🧘🏽‍♀️</p>
          </div>
          :
          todos.map((todo, index) => (
        <Flex key={index}  gap={3}>
  <Tooltip label='Hey use the clock' aria-label="A tooltip" borderRadius={'50px'} fontSize={'13px'} position={'relative'} left={'-9rem'} top={'-1rem'} color={'black'} bg={'whitesmoke'}>
           
         <Flex justifyContent={'space-between'} w={'15rem'} alignItems={'center'} bg={'whitesmoke'} p={2} className="space-x-[1rem] rounded-lg cursor-pointer hover:scale-95 transition-all duration-300 ease-out">
          <div className="flex items-center space-x-4">
           {todo.done ? 
           <MdCheckBox className="cursor-pointer"/>
           :
           <MdOutlineCheckBoxOutlineBlank className="cursor-pointer"/>
           }
          <Box  className="flex items-center  cursor-pointer ">
          <p className={` ${todo.done ? 'line-through' : ''} whitespace-nowrap text-[0.8rem] font-semibold`}>
             {todo.task}
          </p>
          </Box>
          </div>
         <Flex alignItems={'center'} gap={2}>
          <MdEditNote onClick={() => handleEdit(todo._id)} className="text-blue-600 text-[1.5rem] cursor-pointer"/>
            <FaTrashAlt onClick={()=>handleDelete(todo._id)} className="cursor-pointer text-red-600"/>
     <Popover initialFocusRef={initialFocusRef}
      placement={{base:'left',lg:'right'}}
      closeOnBlur={true}>
        <PopoverTrigger>
         <MdAccessTime className="text-blue-600 text-[1rem] cursor-pointer"/>
        </PopoverTrigger>
        <PopoverContent color='white' bg='blue.500' w={{base:'15rem',lg:'16rem'}} h={{base:'13rem',lg:'12rem'}}>
    <PopoverHeader pt={4} fontWeight={'bold'} border={0}>
      Set Your timer here
    </PopoverHeader>
    <PopoverBody>
     {showSettings? <Settings />:<Timer />}
    </PopoverBody>
       <PopoverCloseButton />
    </PopoverContent>
    </Popover>
            
         </Flex>

         </Flex>
     </Tooltip>
          </Flex>
        ))}
      </Flex>
      <Toaster 
        position="top-center"
      />
    </Box>
  )
}

export default Tasks