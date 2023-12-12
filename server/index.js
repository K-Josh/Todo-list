import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import TodoModel from './Models/Todo.js'

const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')



app.post('/add', (req, res) => {
    const task = req.body.task
    TodoModel.create({
        task: task
    })
})

app.listen(4000, ()=>{
    console.log('server is running');
})