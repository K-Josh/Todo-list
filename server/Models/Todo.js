import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
      type: Boolean,
      default: false
    },
    time: Number,
}, {timestamps:true})

const TodoModel = mongoose.model('Todo', TodoSchema)
export default TodoModel;