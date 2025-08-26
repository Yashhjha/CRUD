import express from "express"
import auth from "../middleware/authMiddleware.js";
const todorouter = express.Router();
import  {createTodoController}  from "../controllers/todoController.js";

todorouter.post('/create',auth,createTodoController)
export default todorouter