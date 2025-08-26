import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        tye:Boolean,
        required:true,
        default:false,
    },
    createdBy  :{
        ref:"user",
        type:mongoose.Schema.ObjectId,
    }

},{timestampstrue})
const todo = mongoose.model('todo',todoSchema);
export default todo;